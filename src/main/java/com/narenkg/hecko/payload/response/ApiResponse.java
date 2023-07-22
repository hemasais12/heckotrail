package com.narenkg.hecko.payload.response;

import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse {
	private EApiResponseType responseType;
    private Message message;
    private Object data;
    
    public ApiResponse(EApiResponseType responseType, Message message) {
    	this.responseType = responseType;
    	this.message = message;
    }
}
