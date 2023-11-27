import Filme from "../../dominio/entidades/Filme";

class FilmesRepository {

    constructor() {
    }

    async buscarFilmes(ator) {
        const response = await fetch("../../filmes.json");
        const filmesJson = await response.json();

        const filmes = filmesJson.record.map(filme => new Filme(
            filme.id,
            filme.titulo,
            filme.diretor,
            filme.classificacaoEtaria,
            filme.anoLancamento,
            filme.duracao,
            filme.atores
        ));

        return filmes.filter(filme =>
            filme.atores.some(atorNome => atorNome.toLowerCase().includes(ator.toLowerCase()))
        );
    }
}

export default FilmesRepository;
