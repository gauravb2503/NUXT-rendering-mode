<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-4xl font-bold mb-4">Client Side Rendering (CSR)</h1>
    <p v-if="pending">Loading Table...</p>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b border-r">ID</th>
            <th class="py-2 px-4 border-b border-r">Name</th>
            <th class="py-2 px-4 border-b border-r">Price</th>
            <th class="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products.data"
            :key="product.item_id"
            class="hover:bg-gray-50"
          >
            <td class="py-2 px-4 border-b border-r">{{ product.item_id }}</td>
            <td class="py-2 px-4 border-b border-r">{{ product.name }}</td>
            <td class="py-2 px-4 border-b border-r">{{ product.price }}</td>
            <td class="py-2 px-4 border-b">{{ product.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
const {data: products, pending} = await useLazyFetch('/api/products');
</script>