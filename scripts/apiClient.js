function getToken() {
    var params = "client_id=usrHackaDay&client_secret=aZ6a2F15kJI2t4mb&scope=apiseguradora&grant_type=client_credentials";
    var oReq = new XMLHttpRequest();
    oReq.open("post", "https://apis-hmg.mongeralaegon.com.br/connect/token", false);
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(params);

    if (oReq.status === 200) {
        var retorno = JSON.parse(oReq.responseText);
        return retorno.access_token;
    }
    return null;
}


function getModelosProposta() {
    var token = getToken();

    var oReq = new XMLHttpRequest();
    oReq.open("GET", "https://apis-hmg.mongeralaegon.com.br/apiseguradora/v2/modeloproposta?cnpj=51443735000120&completo=true", false);
    oReq.setRequestHeader('Content-type', 'application/json');
    oReq.setRequestHeader('client_id', '9de4f1c9-7610-3f95-964c-fa64afa5ebd9');
    oReq.setRequestHeader('Authorization', 'Bearer ' + token);

    oReq.send();

    if (oReq.status === 200) {
        var retorno = JSON.parse(oReq.responseText);
        return retorno;
    }
    return null;
}