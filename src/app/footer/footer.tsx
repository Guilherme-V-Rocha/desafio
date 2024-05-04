import { theme } from "@/styles/theme";
import { Typography } from "@/components/typography";
import { FooterWrapper } from "./footer.styles";

export function Footer() {
  return (
    <FooterWrapper>
      <Typography
        fontWeight={theme.fontWeight.regular}
        fontSize={theme.fontSize.xxxSmall}
      >
        MKS sistemas © Todos os direitos reservados
      </Typography>
    </FooterWrapper>
  );
}
