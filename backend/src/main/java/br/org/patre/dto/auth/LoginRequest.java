package br.org.patre.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @NotBlank(message = "Informe seu e-mail.")
        @Email(message = "Digite um e-mail válido.")
        String email,

        @NotBlank(message = "Informe sua senha.")
        String password
) {
}
