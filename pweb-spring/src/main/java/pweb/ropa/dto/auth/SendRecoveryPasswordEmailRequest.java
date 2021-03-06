package pweb.ropa.dto.auth;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pweb.ropa.validation.Email;

@Getter
@Setter
@NoArgsConstructor
public class SendRecoveryPasswordEmailRequest {

    @Email
    private String email;

}
