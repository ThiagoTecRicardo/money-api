package com.money.api.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.money.api.model.TipoLancamento;

public class LancamentoEstatisticaCategoriaDia {

	private TipoLancamento tipo;

	private LocalDate dia;

	private BigDecimal total;

	public LancamentoEstatisticaCategoriaDia(TipoLancamento tipo, LocalDate dia, BigDecimal total) {
		this.tipo = tipo;
		this.dia = dia;
		this.total = total;
	}

	public TipoLancamento getTipo() {
		return tipo;
	}

	public void setTipo(TipoLancamento tipo) {
		this.tipo = tipo;
	}

	public LocalDate getDia() {
		return dia;
	}

	public void setDia(LocalDate dia) {
		this.dia = dia;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
	

}
