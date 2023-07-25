package com.narenkg.hecko.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import com.narenkg.hecko.constants.beans.EmailData;
import com.narenkg.hecko.constants.beans.SmsData;
import com.narenkg.hecko.consts.IConstants;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import freemarker.template.Configuration;
import freemarker.template.Template;

@Service
public class SmsService {

	@Autowired
	private Configuration freemarkerConfig;

	@Autowired
	private EmailService emailService;

	public void sendSms(SmsData smsData, String templateName) throws Exception {

		Template template = freemarkerConfig.getTemplate(templateName);
		String content = FreeMarkerTemplateUtils.processTemplateIntoString(template, smsData.getModel());

		boolean canSend = false;

		if (canSend) {
			Twilio.init("AC8f0d527729b58bf1eded8c5c8e22a778", "8c5b6926e2b528e053b5d42561937356");

			Message.creator(new PhoneNumber("+919108912233"), new PhoneNumber(IConstants.APP_SENDER_PHONE), content).create();
		} else {
			EmailData emailData = new EmailData();
			emailData.setSubject("Hecko OTP");
			emailData.setModel(smsData.getModel());
			emailService.sendOtpEmail(emailData);
		}

	}

	public void sendOtpSms(SmsData smsData) throws Exception {
		sendSms(smsData, "smsotpverify.ftl");
	}
}
