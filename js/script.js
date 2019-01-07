function lerJson(){
	var c = 1;
	var j = 0;
	var v1 = 0;
	var qntV = 0;
	for(i=1; usuario.length>=i; i++){
		if(sessionStorage.length>0){
			var r = parseFloat(sessionStorage.getItem("registros"))+1;
		}
		else{
			sessionStorage.setItem("registros", 1);
			var r = 1;
		}

		sessionStorage.setItem("nome"+i+c, usuario[j].nomej);
		sessionStorage.setItem("senha"+i+c, usuario[j].senhaj);
		sessionStorage.setItem("dataN"+i+c, usuario[j].dataNascj);
		sessionStorage.setItem("tel"+i+c, usuario[j].telefonej);
		sessionStorage.setItem("cel"+i+c, usuario[j].celularj);
		sessionStorage.setItem("logra"+i+c, usuario[j].logradouroj);
		sessionStorage.setItem("numero"+i+c, usuario[j].numeroj);
		sessionStorage.setItem("cidade"+i+c, usuario[j].cidadej);
		sessionStorage.setItem("cep"+i+c, usuario[j].cepj);
		sessionStorage.setItem("profissional"+i+c, usuario[j].profissionalj);
		sessionStorage.setItem("dataC"+i+c, usuario[j].dataNascj);
		for(v=0; usuario[j].vacinasj.length>v; v++){
			sessionStorage.setItem("vacinasTomadas"+i+c+v, usuario[j].vacinasj[v].vacinaT);
			v1++;
			qntV++;
		}
		v1 = 0;
		sessionStorage.setItem("qntVacinas"+i+c, qntV);
		sessionStorage.setItem("consulta"+i, 1);
		sessionStorage.setItem("registros", r);
		qntV = 0;
		j++;
	}
}

function validacao(){
	$("#sm-nome,#sm-data-n,#sm-tele,#sm-celu,#sm-logra,#sm-numero,#sm-cidade,#sm-cep,#sm-vacina,#sm-pro,#sm-datac,#sm-senha").empty();
	if($("#nome").val() == ""){
		$("#sm-nome").html("Digite o Seu Nome Completo");
		$("#nome").focus();
		return false;
	}
	else{
		if($("#data-n").val() == ""){
			$("#sm-data-n").html("Escolha a sua Data de Nascimento");
			$("#data-n").focus();
			return false
		}
		else{
			if($("#tele").val().length<10){
				$("#sm-tele").html("Digite Um Telefone Válido Com DDD");
				$("#tele").focus();
			}
			else{
				if($("#celu").val().length<11){
					$("#sm-celu").html("Digite Um Celular Válido Com DDD");
					$("#celu").focus();
				}
				else{
					if($("#logradouro").val() == ""){
						$("#sm-logra").html("Digite o Logradouro");
						$("#logradouro").focus();
					}
					else{
						if($("#numero").val() == ""){
							$("#sm-numero").html("Digite o número");
							$("#numero").focus();
						}
						else{
							if($("#cidade").val() == ""){
								$("#sm-cidade").html("Digite o nome da sua Cidade");
								$("#cidade").focus();
							}
							else{
								if($("#cep").val() == ""){
									$("#sm-cep").html("Digite o seu Cep");
									$("#cep").focus();
								}
								else{
									if($("input[name=vacina]:checked").val() == undefined){
										$("#sm-vacina").html("Escolha Pelo Menos Uma Vacina");
									}
									else{
										if($("#profissional").val() == ""){
											$("#sm-pro").html("Escolha um Profissional");
										}
										else{
											if ($("#data-c").val() == ""){
												$("#sm-datac").html("Escolha a Data do Atendimento");
												$("#data-c").focus();
											}
											else{
												if($("#senha").val() == ""){
													$("#sm-senha").html("Digite a sua Senha");
													$("#senha").focus();
												}
												else{
													return true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

}

function validacao2(){
	$("#sm-nome,#sm-data-n,#sm-tele,#sm-celu,#sm-logra,#sm-numero,#sm-cidade,#sm-cep,#sm-vacina,#sm-pro,#sm-datac").empty();
	if($("input[name=vacina]:checked").val() == undefined){
		$("#sm-vacina").html("Escolha Pelo Menos Uma Vacina");
	}
	else{
		if($("#profissional").val() == ""){
			$("#sm-pro").html("Escolha um Profissional");
		}
		else{
			if ($("#data-c").val() == ""){
				$("#sm-datac").html("Escolha a Data do Atendimento");
			}
			else{
				return true;
			}
		}
	}
}

function validacao3(){
	$("#sm-vacina1,#sm-pro1,#sm-datac1").empty();
	if($("input[name=vacina1]:checked").val() == undefined){
		$("#sm-vacina1").html("Escolha Pelo Menos Uma Vacina");
	}
	else{
		if($("#profissional1").val() == ""){
			$("#sm-pro1").html("Escolha um Profissional");
		}
		else{
			if ($("#data-c1").val() == ""){
				$("#sm-datac1").html("Escolha a Data do Atendimento");
			}
			else{
				return true;
			}
		}
	}
}

function salvar(){
	var i,c=1,v=0;
	var vacina = $("input[name=vacina]:checked");
	if(sessionStorage.length>0){
		i = parseInt(sessionStorage.getItem("registros"))+1;
		sessionStorage.setItem("consulta" + i, 1);
	}
	else{
		sessionStorage.setItem("registros", 1);
		sessionStorage.setItem("consulta" + 1, 1);
		i = 1;
	}
	sessionStorage.setItem("nome" + i + c, $("#nome").val());
	sessionStorage.setItem("senha" + i + c, $("#senha").val());
	sessionStorage.setItem("dataN" + i + c, $("#data-n").val());
	sessionStorage.setItem("tel" + i + c, $("#tele").val());
	sessionStorage.setItem("cel" + i + c, $("#celu").val());
	sessionStorage.setItem("logra" + i + c, $("#logradouro").val());
	sessionStorage.setItem("numero" + i + c, $("#numero").val());
	sessionStorage.setItem("cidade" + i + c, $("#cidade").val());
	sessionStorage.setItem("cep" + i + c, $("#cep").val());
	sessionStorage.setItem("profissional" + i + c, $("#profissional").val());
	sessionStorage.setItem("dataC" + i + c, $("#data-c").val());
	
	vacina.each(function(){
		sessionStorage.setItem("vacinasTomadas" + i + c + v, $(this).val());
		v++
		
	});
	sessionStorage.setItem("qntVacinas" + i + c, v);
	
	sessionStorage.setItem("registros" , i);
}

function loginSucess(i){
		if(i != 0){
		$("#logar").addClass("hidden");
        $("#newConta").addClass("hidden");
        $("#todasConsultas").removeClass("hidden");
		$("#btn-alterarCadastro").removeClass("hidden");
		$("#btn-excluiCadastro").removeClass("hidden");
		$("#btn-novaConsulta").removeClass("hidden");

		$("#nome").html(sessionStorage.getItem("nome"+i+"1"));
		$("#data1").html(sessionStorage.getItem("dataN"+i+"1"));
		$("#tele").html(sessionStorage.getItem("tel"+i+"1"));
		$("#celu").html(sessionStorage.getItem("cel"+i+"1"));
		$("#logradouro").html(sessionStorage.getItem("logra"+i+"1"));
		$("#numero").html(sessionStorage.getItem("numero"+i+"1"));
		$("#cidade").html(sessionStorage.getItem("cidade"+i+"1"));
		$("#cep").html(sessionStorage.getItem("cep"+i+"1"));

		$("#nome").val(sessionStorage.getItem("nome"+i+"1"));
		$("#data1").val(sessionStorage.getItem("dataN"+i+"1"));
		$("#tele").val(sessionStorage.getItem("tel"+i+"1"));
		$("#celu").val(sessionStorage.getItem("cel"+i+"1"));
		$("#logradouro").val(sessionStorage.getItem("logra"+i+"1"));
		$("#numero").val(sessionStorage.getItem("numero"+i+"1"));
		$("#cidade").val(sessionStorage.getItem("cidade"+i+"1"));
		$("#cep").val(sessionStorage.getItem("cep"+i+"1"));
	}
}

function verificar(){
	var nomeSelecionado = $("#nome-login").val();
	var senha = $("#senha-login").val();
	var rVacina=0;
	$("#login-consulta").empty();
	$("#login-consulta").append("OBS: A Partir Da Segunda Vacina Desconto de 5%<br>");
	for(i=1; sessionStorage.getItem("registros")>=i; i++){
		if(sessionStorage.getItem("nome"+i+"1") == nomeSelecionado && sessionStorage.getItem("senha"+i+"1") == senha){
			for(c=1; sessionStorage.getItem("consulta"+i)>=c; c++){      
                if(sessionStorage.getItem("nome"+i+c) != "Excluido"){
                    $("#login-consulta").append(
                        "<br><strong>Consulta " + c + "</strong> " +
                        "<strong><br>Nome:</strong> " + sessionStorage.getItem("nome"+i+c) + "<br>" +
                        "<strong>Data De Nascimento:</strong> " + sessionStorage.getItem("dataN"+i+c) + "<br>" +
                        "<strong>Telefone:</strong> " + sessionStorage.getItem("tel"+i+c) + "<br>" +
                        "<strong>Celular:</strong> " + sessionStorage.getItem("cel"+i+c) + "<br>" +
                        "<strong>Endereço: </strong>" + sessionStorage.getItem("logra"+i+c) + " Nº: " + sessionStorage.getItem("numero"+i+c) + " - " + sessionStorage.getItem("cidade"+i+c) + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp CEP:" + sessionStorage.getItem("cep"+i+c) + "<br>"
                    );
                    for(v=0; sessionStorage.getItem("qntVacinas"+i+c)>v; v++){
                            $("#login-consulta").append(
                                "<strong>Valor da Vacina " + (v+1) + ": </strong> R$" + sessionStorage.getItem("vacinasTomadas"+i+c+v) + "<br>"
                            );
                            if(rVacina == 0){
                            	rVacina += parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v));
                            }
                            else{
                            	var desconto = parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v))*0.05;
                            	rVacina += parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v))-desconto;
                            }
                    }
                    $("#login-consulta").append(
                        "<strong>Profissional:</strong> " + sessionStorage.getItem("profissional"+i+c) + "<br>" +
                        "<strong>Data Do Atendimento:</strong> " + sessionStorage.getItem("dataC"+i+c) + "<br>" +
                        "<strong>Total Pago:</strong> R$" + rVacina + ".00 <br><br>"
                    );
                    rVacina = 0;
                }
                else{
                    $("#login-consulta").append("<strong>Consulta "+c+" Excluida<br></strong>");
                }
                
			}
			$("#nome-login").addClass("hidden");
			$("#senha-login").addClass("hidden");
			$("#senhaCompleto").addClass("hidden");
			$("#nomeCompleto").html("Bem Vindo " + sessionStorage.getItem("nome"+i+"1"));
			return i;
		}

		if(sessionStorage.getItem("registros")==i){
			$("#msg").html("Login Invalido<br>-Digite o Seu Nome Corretamente <br><br> Ou <br> <a href=" + "index.html" + ">Clique Aqui Para Um Criar Cadastro</a>");
			$("#msg").dialog("open");
			return 0;
		}
	}
}


function validacaoConsulta(){
	var nomeSelecionado = $("#nome-login").val();
	for(i=1; sessionStorage.getItem("registros")>=i; i++){
		if(sessionStorage.getItem("nome"+i+"1") == nomeSelecionado){
			return i;
		}

		if(sessionStorage.getItem("registros")==i){
			return 0;
		}
	}
}

function newConsulta(i){
	if(i != 0){
	var vacina = $("input[name=vacina]:checked");
	var c = parseInt(sessionStorage.getItem("consulta"+i))+1;
	var v = 0;

	sessionStorage.setItem("nome" + i + c, $("#nome-login").val());
	sessionStorage.setItem("dataN" + i + c, $("#data1").val());
	sessionStorage.setItem("tel" + i + c, $("#tele").val());
	sessionStorage.setItem("cel" + i + c, $("#celu").val());
	sessionStorage.setItem("logra" + i + c, $("#logradouro").val());
	sessionStorage.setItem("numero" + i + c, $("#numero").val());
	sessionStorage.setItem("cidade" + i + c, $("#cidade").val());
	sessionStorage.setItem("cep" + i + c, $("#cep").val());
	
	vacina.each(function(){
		sessionStorage.setItem("vacinasTomadas" + i + c + v, $(this).val());
		v++		
	});

	sessionStorage.setItem("profissional" + i + c, $("#profissional").val());
	sessionStorage.setItem("dataC" + i + c, $("#data-c").val());

	sessionStorage.setItem("qntVacinas" + i + c, v);

	sessionStorage.setItem("consulta"+i, c);
	}
}

function alterarDados(i){
	$("#dialog-alterar").empty();
	$("#dialog-alterar").append(
		"<labe class="+"lbl-user-info"+">Escolha A Consulta que Deseja Alterar</labe><br><br>"
	);
	for(c=1; sessionStorage.getItem("consulta"+i)>=c; c++){
		$("#dialog-alterar").append(
			"<label class=" + "lbl-alterar" +">Consulta" + c +"<input type="+"radio"+" id="+"radio-alterar"+" name="+"radio-alterar"+" value="+c+"></label>"
		);
	}
	$("#dialog-alterar").append(
		"<br><br><button id="+"btn-confirm-alt"+">Alterar Consulta</button><small id="+"sm-alterar"+"></small>"
	);
	$("#btn-confirm-alt").click(function(){
		var c1 = $("input[name=radio-alterar]:checked").val();
		$("#sm-alterar").empty();
		if(c1 == undefined){
			$("#sm-alterar").html("Escolha a Consulta que Deseja Alterar");
		}
		else{
			$("#dialog-alterar").dialog("close");
			$("#dialog-consulta1").dialog("open");

			$("#nome1").html(sessionStorage.getItem("nome"+i+"1"));
			$("#data11").html(sessionStorage.getItem("dataN"+i+"1"));
			$("#tele1").html(sessionStorage.getItem("tel"+i+"1"));
			$("#celu1").html(sessionStorage.getItem("cel"+i+"1"));
			$("#logradouro1").html(sessionStorage.getItem("logra"+i+"1"));
			$("#numero1").html(sessionStorage.getItem("numero"+i+"1"));
			$("#cidade1").html(sessionStorage.getItem("cidade"+i+"1"));
			$("#cep1").html(sessionStorage.getItem("cep"+i+"1"));

			$("#nome1").val(sessionStorage.getItem("nome"+i+"1"));
			$("#data11").val(sessionStorage.getItem("dataN"+i+"1"));
			$("#tele1").val(sessionStorage.getItem("tel"+i+"1"));
			$("#celu1").val(sessionStorage.getItem("cel"+i+"1"));
			$("#logradouro1").val(sessionStorage.getItem("logra"+i+"1"));
			$("#numero1").val(sessionStorage.getItem("numero"+i+"1"));
			$("#cidade1").val(sessionStorage.getItem("cidade"+i+"1"));
			$("#cep1").val(sessionStorage.getItem("cep"+i+"1"));

			$("#btn-alterar1").click(function(){
				if(validacao3() == true){
					var v1=0;
					var newVacina = $("input[name=vacina1]:checked");
					for(v=0; sessionStorage.getItem("qntVacinas"+i+c1)>=v; v++){
						sessionStorage.removeItem("vacinasTomadas"+i+c1+v);
					}
					sessionStorage.removeItem("qntVacinas"+i+c1);
					
					newVacina.each(function(){
						sessionStorage.setItem("vacinasTomadas"+i+c1+v1, $(this).val());
						v1++
					});

					sessionStorage.setItem("qntVacinas"+ i+c1, v1);
					sessionStorage.setItem("profissional"+i+c1 , $("#profissional1").val());
					sessionStorage.setItem("dataC"+i+c1, $("#data-c1").val());
					verificar();
					$("#dialog-consulta1").dialog("close");
					$("#msg").html("A Consulta " + c1 + " Foi Alterada Com Sucesso");
					$("#msg").dialog("open");
				}
			});

	}
		

	});
}

function excluirDados(i){
$("#dialog-alterar").empty();
	$("#dialog-alterar").append(
		"<labe class="+"lbl-user-info"+">Escolha A Consulta que Deseja Excluir</labe><br><br>"
	);
	for(c=1; sessionStorage.getItem("consulta"+i)>=c; c++){
		$("#dialog-alterar").append(
			"<label class=" + "lbl-alterar" +">Consulta" + c +"<input type="+"radio"+" id="+"radio-excluir"+" name="+"radio-excluir"+" value="+c+"></label>"
		);
	}
	$("#dialog-alterar").append(
		"<br><br><button id="+"btn-confirm-del"+">Excluir Consulta</button><small id="+"sm-excluir"+"></small>"
	);
	$("#btn-confirm-del").click(function(){
		var c2 = $("input[name=radio-excluir]:checked").val();
		$("#sm-alterar").empty();
		if(c2 == undefined){
			$("#sm-excluir").html("Escolha a Consulta que Deseja Excluir");
		}
		else{
			sessionStorage.setItem("nome"+i+c2, "Excluido");
			sessionStorage.removeItem("dataN"+i+c2);
			sessionStorage.removeItem("tel"+i+c2);
			sessionStorage.removeItem("cel"+i+c2);
			sessionStorage.removeItem("logra"+i+c2);
			sessionStorage.removeItem("numero"+i+c2);
			sessionStorage.removeItem("cidade"+i+c2);
			sessionStorage.removeItem("cep"+i+c2);
			for(v=0; sessionStorage.getItem("qntVacinas"+i+c2)>=v; v++){
				sessionStorage.removeItem("vacinasTomadas"+i+c2+v);

			}
			sessionStorage.removeItem("qntVacinas"+i+c2);
			sessionStorage.removeItem("profissional"+i+c2);
			sessionStorage.removeItem("dataC"+i+c2);

			$("#dialog-alterar").dialog("close");
			$("#msg").html("A Consulta " + c1 + " Foi Excluida Com Sucesso");
			$("#msg").dialog("open");
		}
		

	});
}

function todosAtendimentos(){
	var c = 1;
	var totVacinas= 0;
	var totConsulta = 0;
	var totLucro = 0;
	$("#dialog-pesquisa").empty();
	$("#dialog-pesquisa").dialog("open");
	for(i=1; sessionStorage.getItem("registros")>=i; i++){
		$("#dialog-pesquisa").append(
			"<strong><br>Usuário</strong> " + sessionStorage.getItem("nome"+i+"1") + "<br>" +
            "<strong>Data De Nascimento:</strong> " + sessionStorage.getItem("dataN"+i+"1") + "<br>" +
            "<strong>Telefone:</strong> " + sessionStorage.getItem("tel"+i+"1") + "<br>" +
            "<strong>Celular:</strong> " + sessionStorage.getItem("cel"+i+"1") + "<br>" +
            "<strong>Endereço: </strong>" + sessionStorage.getItem("logra"+i+"1") + " Nº: " + sessionStorage.getItem("numero"+i+"1") + " - " + sessionStorage.getItem("cidade"+i+"1") + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp CEP:" + sessionStorage.getItem("cep"+i+"1") + "<br>"
		);
			for(c=1; sessionStorage.getItem("consulta"+i)>=c; c++){
				if(sessionStorage.getItem("nome"+i+c) != "Excluido"){
					for(v=0; sessionStorage.getItem("qntVacinas"+i+c)>v; v++){
						if(totVacinas == 0){
							totVacinas += parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v));
							
						}
						else{
							var desconto =  parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v))*0.05;
							totVacinas += parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v))-desconto;
							
							
						}

					}
					totConsulta += totVacinas;
					$("#dialog-pesquisa").append(
						"<strong>Consulta" + c + " </strong><br>Total Pago: R$ " + totVacinas + "<br><br>"
					);
					totVacinas = 0;
				}
				else{
					$("#dialog-pesquisa").append("<span class="+"spn-excluir"+">Consulta " + c + " Excluida</span><br><br>");
				}
			}
			$("#dialog-pesquisa").append("<span id="+"spn-tot-consulta"+">Valor Total Pago: R$ " + totConsulta + "</span><br><br><div class="+"spn-linha"+"></div>");	
			totLucro += totConsulta;
			totConsulta = 0;	
	}
	$("#dialog-pesquisa").append("<span class="+"spn-lucroTotal"+">Lucro Total Da Clinica R$ " + totLucro + "</span>");
}

function atendimentosProfissional(){
	$("#dialog-pesquisa").empty();
	var pesquisaP = $("#profissional").val();
	totVacinas = 0;
	totProfissional = 0;

	for(i=1; sessionStorage.getItem("registros")>= i; i++){
		for(c=1; sessionStorage.getItem("consulta"+i)>= c; c++){
			if(sessionStorage.getItem("profissional"+i+c) == pesquisaP){
				$("#dialog-pesquisa").append(
					"<strong>Nome Do Usuário:</strong> " + sessionStorage.getItem("nome"+i+c) + "<br>" +
					"<strong>Consulta " + c + "</strong><br>"
				);
				for(v=0; sessionStorage.getItem("qntVacinas"+i+c)> v; v++){
					if(totVacinas == 0){
						totVacinas += parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v));
							
					}
					else{
						var desconto =  parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v))*0.05;
						totVacinas += parseFloat(sessionStorage.getItem("vacinasTomadas"+i+c+v))-desconto;					
							
					}

					$("#dialog-pesquisa").append(
						"<strong>Vacina " + (v+1) + ": </strong>R$" + sessionStorage.getItem("vacinasTomadas"+i+c+v) +  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <br>"
					);
				}
				totProfissional += totVacinas;
				$("#dialog-pesquisa").append("<strong>Total Pago: </strong>R$ " + totVacinas + "<br><div class="+"spn-linha"+"></div>");
				totVacinas =0;
			}
		}
	}
		$("#dialog-pesquisa").append("<span class="+"spn-totprofissional"+">" +  pesquisaP + " Fez R$" + totProfissional + " De Lucro</span>")

}

function verificarRegistro(){
	var nomeVerificar = $("#nome").val();
	$("#msg-cadastro").empty();
	$("#sm-nome").empty();
	for(i=0; sessionStorage.getItem("registros")>=i; i++){
		if(nomeVerificar == sessionStorage.getItem("nome"+i+"1")){
			$("#nome").focus();
			$("#sm-nome").html("Usuário Já Registrado");
			return false
		}
	}
	return true
}



$(function(){
	if(sessionStorage.length == 0){
		lerJson();
	}


	$("#data-n").datepicker();
	$("#data-c").datepicker();
	$("#data-c1").datepicker();
	$("#msg").dialog({
		autoOpen: false,
		width: 300
	});
	$("#dialog-consulta").dialog({
		autoOpen: false,
		width: 800,
		position: "center",
	});
	$("#dialog-consulta1").dialog({
		autoOpen: false,
		width: 800,
		position: "center",
	});

	$("#dialog-alterar").dialog({
		autoOpen: false,
		width: 800,
		position: "center",
	});

	$("#dialog-pesquisa").dialog({
		autoOpen: false,
		width: 800,
		position: "center",
	});

	$("#msg-cadastro").dialog({
		autoOpen: false,
		width: 300,
	});
	
	$("#btn-consulta").click(function(){
		if(verificarRegistro() == true && validacao() == true){
			salvar();
			$("#msg-cadastro").html("Sua Conta Foi Registrada Com Sucesso");
			$("#msg-cadastro").dialog("open");
		}
	});

	$("#logar").click(function(){
		loginSucess(verificar());
	});

	$("#btn-novaConsulta").click(function(){
		$("#dialog-consulta").dialog("open");

	});

	$("#btn-consulta2").click(function(){
		if(validacao2() == true){
			newConsulta(validacaoConsulta());
			verificar();
			$("#dialog-consulta").dialog("close");
			$("#msg").html("Nova Consulta Feita Com Sucesso");
			$("#msg").dialog("open");
		}
		
	});

	$("#btn-alterarCadastro").click(function(){
		$("#dialog-alterar").dialog("open");
		alterarDados(validacaoConsulta());
		verificar();	
	});

	$("#btn-excluiCadastro").click(function(){
		$("#dialog-alterar").dialog("open");
		excluirDados(validacaoConsulta());
		verificar();
	});


	$("#btn-todos").click(function(){
		todosAtendimentos();
	});

	$("#btn-profissional").click(function(){
		if($("#profissional").val() == ""){
			$("#sm-pro").empty()
			$("#sm-pro").html("Escolha Um Profissional");
		}
		else{
			$("#dialog-pesquisa").dialog("open");
			atendimentosProfissional();
		}

	});
});