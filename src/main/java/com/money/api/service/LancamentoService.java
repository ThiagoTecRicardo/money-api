package com.money.api.service;

import java.io.InputStream;
import java.sql.Date;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.money.api.dto.LancamentoEstatisticaPessoa;
import com.money.api.mail.Mailer;
import com.money.api.model.Lancamento;
import com.money.api.model.Pessoa;
import com.money.api.model.Usuario;
import com.money.api.repository.LancamentoRepository;
import com.money.api.repository.PessoaRepository;
import com.money.api.repository.UsuarioRepository;
import com.money.api.service.exception.PessoaInexistenteOuInativaException;

import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class LancamentoService {
	
	private static final String DESTINATARIOS = "ROLE_PESQUISAR_LANCAMENTO";
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired 
	private LancamentoRepository lancamentoRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private Mailer mailer;
	
	//@Scheduled(fixedDelay = 1000 * 60 * 30)
	@Scheduled(cron = "0 0 6 * * *")
	public void avisarSobreLancamentosVencidos() {
		
		List<Lancamento> vencidos = lancamentoRepository
				.findByDataVencimentoLessThanEqualAndDataPagamentoIsNull(LocalDate.now());
		List<Usuario> destinatarios = usuarioRepository
				.findByPermissoesDescricao(DESTINATARIOS);
		
		mailer.avisarSobreLancamentosVencidos(vencidos, destinatarios);
		
		
	}
	
	public byte[] relatorioPorPessoa(LocalDate inicio, LocalDate fim) throws Exception {
		List<LancamentoEstatisticaPessoa> dados = lancamentoRepository.porPessoa(inicio, fim);
		
		Map<String, Object> parametros = new HashMap<>();
		parametros.put("DT_INICIO", Date.valueOf(inicio));
		parametros.put("DT_FIM", Date.valueOf(fim));
		parametros.put("REPORT_LOCATE", new Locale("pt", "BR"));
		
		InputStream inputStream = this.getClass().getResourceAsStream("/relatorios/Lancamentos-por-pessoa.jasper");
		
		JasperPrint jasperPrint = JasperFillManager.fillReport(inputStream, parametros, new JRBeanCollectionDataSource(dados));
		
		return JasperExportManager.exportReportToPdf(jasperPrint);
	}

	public Lancamento salvar(Lancamento lancamento) {
		Optional<Pessoa> pessoa = pessoaRepository.findById(lancamento.getPessoa().getCodigo());
		if (pessoa.isEmpty() || pessoa.get().isInativo()) {
			throw new PessoaInexistenteOuInativaException();
		}
		
		return lancamentoRepository.save(lancamento);
	}
	
	
	
	

}
