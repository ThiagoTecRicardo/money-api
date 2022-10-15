package com.money.api.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("money")
public class MoneyApiProperty {
	
	private String originPermitida = "https://thiago-money.herokuapp.com";
	
	private final Seguranca seguranca = new Seguranca();
	
	private final Mail mail = new Mail();
	
	private final S3 s3 = new S3();
	
	public S3 getS3() {
		return s3;
	}
	
	public Mail getMail() {
		return mail;
	}
	
	public Seguranca getSeguranca() {
		return seguranca;
	}
	
	public String getOriginPermitida() {
		return originPermitida;
	}

	public void setOriginPermitida(String originPermitida) {
		this.originPermitida = originPermitida;
	}

	public static class Seguranca {
		
		private boolean enableHttps;
		
		public boolean isEnableHttps() {
			return enableHttps;
		}
		
		public void setEnableHttps(boolean enableHttps) {
			this.enableHttps = enableHttps;
		}
	}
	
	public static class S3 {
		
		private String AWSAccessKeyId = "AKIA4K55Z2ZKQWI2FLOJ" ;
		
		private String AWSSecretKey = "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";
		
		private String bucket = "trs-money-arquivos";
		
		
		public String getBucket() {
			return bucket;
		}

		public void setBucket(String bucket) {
			this.bucket = bucket;
		}

		public String getAWSAccessKeyId() {
			return AWSAccessKeyId;
		}

		public void setAWSAccessKeyId(String aWSAccessKeyId) {
			AWSAccessKeyId = aWSAccessKeyId;
		}

		public String getAWSSecretKey() {
			return AWSSecretKey;
		}

		public void setAWSSecretKey(String aWSSecretKey) {
			AWSSecretKey = aWSSecretKey;
		}
		
		
	}
	
	
	public static class Mail {

		private String host;

		private Integer port;

		private String username;

		private String password;

		public String getHost() {
			return host;
		}

		public void setHost(String host) {
			this.host = host;
		}

		public Integer getPort() {
			return port;
		}

		public void setPort(Integer port) {
			this.port = port;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
	}

}
