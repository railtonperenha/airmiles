<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);

    $para = "railtondev@gmail.com";
    $assunto = "Coleta de Dados - Air Miles Reward"

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: railtondev@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if (mail($para, $assunto, $corpo, $cabeca)){
        echo("E-mail enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar o e-mail");
    }

?>