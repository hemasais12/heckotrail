package com.narenkg.hecko.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ResponseStatus(HttpStatus.BAD_REQUEST)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InputException extends RuntimeException{
    private String fieldName;
    private Object fieldError;
    private String message;
}
