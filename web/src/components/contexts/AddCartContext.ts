import {createContext} from 'react';
import {stateCartProps} from '../Pages/products'


export interface AddCartContextProps {
    Books?: Array<stateCartProps>;
    addCart?: () => void;
    conteudoCarrinho?:Array<stateCartProps>;
    setConteudoCarrinho?: React.Dispatch<React.SetStateAction<stateCartProps[]>>
    children?: React.ReactNode;
    local?: void;
}


 const AddCartContext = createContext<AddCartContextProps>({});

 export {AddCartContext}
