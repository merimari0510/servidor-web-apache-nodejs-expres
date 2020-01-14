# servidor-web-apache-nodejs-expres

# Introducció

Es realitzarà una pàgina web amb JavaScript (JS) que faci el següent:
- un 1r requadre on l'usuari escriu una linia;
- un botó Enviar
- un 2n requadre on es posarà el que l'usuari ha escrit en el 1r requadre quan prem el botó Enviar

Realitzaré la pàgina de tres maneres diferents:
- Amb un servidor web Apache
- Amb un servidor web Apache i Node.Js
- Amb un servidor web Apache, Node.Js i Express

## Entorn de treball
Cal el següent:
- una 1a màquina amb el servidor web
- una 2a màquina amb un navegador
- les dues màquines unides per una xarxa (si hi ha un router NAT entre les màquines,
poseu a la xarxa interna la 2a, o si al revés, obriu-hi el #port del servidor)

Es proposa el següent entorn:
- la 1a màquina que sigui una màquina virtual (VM) de VirtualBox amb el S.O. Ubuntu
Server
- la 2a màquina que sigui la màquina \real" on corre la virtual, o bé un altre ordinador, o
bé un mòbil

Segon l'entorn, es configurarà diferent:
- p.e., a la xarxa domèstica de casa vostra (Ethernet i WiFi): escolliu el mode de xarxa
bridged de la VM, ja que així la VM i la màquina real es trobaran a la mateixa xarxa IP
(heu de fer la configuració de xarxa IP de l'Ubuntu d'acord amb això); la 2a màquina (la
real o un altre ordinador o mòbil) a la xarxa domèstica amb Ethernet o WiFi
- p.e., a la xarxa de l'aula de pràctiques/Internet (Ethernet): escolliu el mode de xarxa
bridged de la VM, com abans; la 2a màquina (p.e., la real o un altre ordinador) a la
mateixa xarxa amb Ethernet

## Instal·lació

La instal·lació, l'explicació del codi i la demo la podeu trobar a la [presentació](https://github.com/merimari0510/servidor-web-apache-nodejs-expres/blob/master/explicacio.pdf).
