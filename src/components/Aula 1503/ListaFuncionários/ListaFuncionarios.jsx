import "../../../CSS/listafuncionarios.css";

const funcionarios = [
    {
        codigo: "001",
        nome: "Patrick Estrela",
        email: "patrickestrela@gmail.com",
        endereco: "Av. das Águas Vivas, 1-10",
    },

    {
        codigo: "002",
        nome: "Lula Molusco",
        email: "lulamolusco@gmail.com ",
        endereco: "Av. das Águas Vivas, 1-20",
    },

    {
        codigo: "003",
        nome: "Bob Esponja",
        email: "bobesponja@gmail.com",
        endereco: "Av. das Águas Vivas, 1-30",
    },
]


export default function ListaFuncionarios () {
    const conteudoTabela = funcionarios.map((funcionario) => {
        return (
            <>            
                <tr key={funcionario.codigo}>
                <th>{funcionario.codigo}</th>
                    <th>{funcionario.nome}</th>
                    <th>{funcionario.email}</th>
                    <th>{funcionario.endereco}</th>
                </tr>
            </>
        );
    });

    return (
        <>
            <h1>Lista de Funcionários</h1>
            <table className="tabela-func">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                    </tr>
                </thead>

                <tbody>
                    {conteudoTabela}
                </tbody>
            </table>
        </>
    );
}