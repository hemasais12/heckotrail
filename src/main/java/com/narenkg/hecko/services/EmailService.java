package com.narenkg.hecko.services;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import com.narenkg.hecko.constants.beans.EmailData;
import com.narenkg.hecko.consts.IConstants;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private Configuration freemarkerConfig;

	@Async
	private void sendEmail(EmailData mail, String template) {
		try {
			MimeMessage message = emailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
					StandardCharsets.UTF_8.name());

			mail.setTo("narenkgcts@outlook.com");
			mail.setCc("narenkgcts@outlook.com");

			Template t = freemarkerConfig.getTemplate(template);
			String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, mail.getModel());

			helper.setTo(mail.getTo());
			helper.setText(html, true);
			if (mail.getCc() != null) {
				helper.setCc(mail.getCc());
			}
			helper.setSubject(mail.getSubject());
			helper.setFrom(IConstants.APP_SENDER_EMAIL);

			emailSender.send(message);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

	public void sendOtpEmail(EmailData email) {
		sendEmail(email, "emailotpverify.ftl");
	}

}
