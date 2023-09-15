export default function AdicionarProdutos() {
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <div>
                <h1>Adicionar Produtos</h1>
                <h3>Informe o nome e preço do produto a ser adicionado:</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Adicionar Produto</legend>
                            <div>
                                <input type="hidden" name="id" />
                            </div>
                            <div>
                                <label htmlFor="idNome">Nome:</label>
                                <input type="text" name="nome" id="idNome" />
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço:</label>
                                <input type="number" name="preco" id="idPreco" />
                            </div>
                            <div>
                                <button>ADICIONAR</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}