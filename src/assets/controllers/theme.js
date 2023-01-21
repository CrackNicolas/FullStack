var change_theme_claro = () => {
    Detectar_primera_vez_theme();
    if(document.documentElement.style.getPropertyValue("--color-font-primary") !== "#ffffffb1"){
        document.documentElement.style.setProperty("--color-font-primary","#ffffffb1");
        document.documentElement.style.setProperty("--color-text-primary","#00b900");
        document.documentElement.style.setProperty("--color-text-secondary",'#000000');
        document.documentElement.style.setProperty("--color-text-tertiary",'#000000');
        document.documentElement.style.setProperty("--color-text-quaternary",'#000000');
        document.documentElement.style.setProperty("--color-text-quintenary",'#000000');
        document.documentElement.style.setProperty("--color-theme-claro-active",'#00b900');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'white');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'white');

        Version_logos_habilidad("1");
        if(document.getElementById("next1_proyecto")){
            document.getElementById("next1_proyecto").src = "../../assets/icons/next_4.png";
        }
        if(document.getElementById("logo-menu")){
            document.getElementById("icon-favicon").href = "./assets/icons/theme_claro/favicon.ico";
            document.getElementById("logo-menu").src = "../../../assets/icons/theme_claro/favicon.ico";
        }
    }
}
var change_theme_intermedio = () => {
    Detectar_primera_vez_theme();
    if(document.documentElement.style.getPropertyValue("--color-font-primary") !== "#000000"){
        document.documentElement.style.setProperty("--color-font-primary","#000000");
        document.documentElement.style.setProperty("--color-text-primary","#00ffff");
        document.documentElement.style.setProperty("--color-text-secondary",'#ffffffde');
        document.documentElement.style.setProperty("--color-text-tertiary",'#ffffffb1');
        document.documentElement.style.setProperty("--color-text-quaternary",'#ffffff80');
        document.documentElement.style.setProperty("--color-text-quintenary",'#ffffff4d');
        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#000000');

        Version_logos_habilidad("2");
        if(document.getElementById("next1_proyecto")){
            document.getElementById("next1_proyecto").src = "../../assets/icons/next_5.png";
        }
        if(document.getElementById("logo-menu")){
            document.getElementById("icon-favicon").href = "./assets/icons/theme_intermedio/favicon.ico";
            document.getElementById("logo-menu").src = "../../../assets/icons/theme_intermedio/favicon.ico";
        }
    }
}
var change_theme_oscuro = () => {
    Detectar_primera_vez_theme();
    if(document.documentElement.style.getPropertyValue("--color-font-primary") !== "#02172d"){
        document.documentElement.style.setProperty("--color-font-primary","#02172d");
        document.documentElement.style.setProperty("--color-text-primary","#2df9bf");
        document.documentElement.style.setProperty("--color-text-secondary",'#ffffffde');
        document.documentElement.style.setProperty("--color-text-tertiary",'#ffffffb1');
        document.documentElement.style.setProperty("--color-text-quaternary",'#ffffff80');
        document.documentElement.style.setProperty("--color-text-quintenary",'#ffffff4d');

        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#2df9bf');

        Version_logos_habilidad("3");

        if(document.getElementById("next1_proyecto")){
            document.getElementById("next1_proyecto").src = "../../assets/icons/next_6.png";
        }
        if(document.getElementById("logo-menu")){
            document.getElementById("icon-favicon").href = "./favicon.ico";
            document.getElementById("logo-menu").src = "../../../favicon.ico";
        }
    }
}
function Version_logos_habilidad(number_version){ 
    (document.getElementById("mysql"))? document.getElementById("mysql").src = Get_src("mysql",number_version) : undefined;
    (document.getElementById("next"))? document.getElementById("next").src = Get_src("next",number_version) : undefined;
}
function Get_src(name_icon,number_version){
    return "../../assets/icons/"+name_icon+"_"+number_version+".png";
}
function Detectar_primera_vez_theme(){
    document.documentElement.style.setProperty("--icono-theme","_");
}