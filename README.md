# ScSelect

Component para multiselect

## Como usar

Importe o **ScSelectModule** no modulo em que deseja utilizar o componente

```js
import { ScSelectModule } from 'sc-select'

@NgModule({
  // ...
  imports: [
    ScSelectModule
  ]
  // ...
})

```

### Settings
Parâmetros para o componente

| Setting         |Type    | Description            | Default Value |
|:--- |:--- |:--- |:--- |
| searchPlaceholder | string | Placeholder para o campo de filtro  | undefined |
| label | string | Label para o componente | undefined |
| listElements | array<{id:number, name:string, checked?:boolean}> | Lista de opções para o componente | undefined |


### Eventos
- `onChange` - Retorna a lista de itens selecionados após uma alteação.

    Example : (onChange)="changeListSelect($event)""