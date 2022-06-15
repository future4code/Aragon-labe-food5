const [nomeProduto, setNomeProduto] = useState()


export const onChangeNomeProduto = (event) => {
    this.setState({ nomeProduto: event.target.value })
}

    

<input>
    Busca por nome:
    <input
        placeholder='Digite nome do produto'
        type="Texto"
        value={nomeProduto}
        onChange={onChangeNomeProduto}
    />
</input> 