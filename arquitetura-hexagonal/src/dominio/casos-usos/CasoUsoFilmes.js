import FilmesRepository from "../../infra/repositorios/FilmesRepository";

class CasoUsoFilmes {

    constructor(filmesRepository) {
        this.filmesRepository = filmesRepository;
    }

    async buscarFilmes(ator) {
        try {
            return this.filmesRepository.buscarFilmes(ator);
        } catch (erro) {
            console.error('Erro ao buscar filmes:', erro);
            return [];
        }
    }
}

export default CasoUsoFilmes;
