import FilmesRepository from "../../infra/repositorios/FilmesRepository";

class CasoUsoFilmes {

    constructor() {
    }

    async buscarFilmes(ator) {
        try {
            return FilmesRepository.buscarFilmes(ator);
        } catch (erro) {
            console.error('Erro ao buscar filmes:', erro);
            return [];
        }
    }
}

export default CasoUsoFilmes;
