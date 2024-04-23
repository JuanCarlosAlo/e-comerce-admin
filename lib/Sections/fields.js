import { v4 } from "uuid";

export const newProductFields = [

    {
        _id: v4(),
        type:'text',
        placeholder:'product name',
        label:'Product Name',
        name: 'name',
    },
    {
        _id: v4(),
        type:'textarea',
        placeholder:'description',
        label:'Description',
        name: 'description',
    },
    {
        _id: v4(),
        type:'number',
        placeholder:'price',
        label:'Price (in USD)',
        name: 'price',
    },

]

export const categoryFields = {
        _id: v4(),
        type:'text',
        placeholder:'Category Name',
        label:'New Category Name',
        name: 'name',
} 