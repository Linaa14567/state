
import { ProductResponse } from "@/lib/types/product-type";
import { fakeStoreApi } from "../api/api";

export const productApi = fakeStoreApi.injectEndpoints({
    endpoints:(builder) => ({
        getProducts: builder.query<ProductResponse[], void>({
            query: () => '/products',
            providesTags: ['products']
        }),
        addProducts: builder.mutation({
            query: (newProduct) => ({
                url: '/products',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ['products']
        })
    })
})

// export hooks for ui can use it
export const { useGetProductsQuery, useAddProductsMutation } = productApi