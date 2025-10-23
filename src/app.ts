import { httpClient } from "./plugins/http-client.plugin";

const id: number | string = "25";


httpClient.get(id).then(data => {
    console.log({
        id: data.id,
        name: data.name
    })
}).catch(console.log);