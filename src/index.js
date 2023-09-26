import fs from "fs"

import chalk from "chalk" ;


function extraiLinks(texto){
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas =[... texto.matchAll(regex)];
  const resultado = capturas.map(capturas => ({[capturas[1]]: capturas[2]}))
  return resultado.length !== 0 ? resultado : "Nao ha links no arquivo"

}

function trataErro(erro){
    throw new Error(chalk.red(erro," Nao ha arquivo no deretorio"))
}
 
  async function pegaArquivo(caminhoDoArquivo){
  try{
  const encoding = "utf-8";
  const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
   return extraiLinks(texto)
  } catch (erro){
    trataErro(erro)
  }
}


export default pegaArquivo;



  