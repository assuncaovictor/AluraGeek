import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Form = () => {
    return (
        <Stack
            component="form"
            onSubmit={(e) => e.preventDefault()}
            gap={1}
            alignItems="flex-start"
            width={{ xs: "100%", sm: "70%", md: 430, lg: 560 }}
        >
            <Typography variant="body2">Fale conosco</Typography>
            <TextField id="name" name="name" label="Nome" placeholder="Digite seu nome aqui" variant="filled" sx={{ width: "100%" }} />
            <TextField
                id="messager"
                label="Escreva sua mensagem"
                placeholder="Digite sua mensagem aqui"
                variant="filled"
                sx={{ width: "100%" }}
                multiline
                rows={3}
            />
            <Button variant="contained" type="submit">
                Enviar mensagem
            </Button>
        </Stack>
    );
};

export default Form;
