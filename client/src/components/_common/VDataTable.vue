<template>
<table>
    <thead>
        <tr>
            <th v-for="header in headers">{{ header.name }}</th>
        </tr>
    </thead>

    <tbody>
        <tr v-for="item in items">
            <td v-for="header in headers">{{ getItemProp(header.prop, item) }}</td>
        </tr>
    </tbody>
</table>
</template>

<script>

export default {
    name: 'vDataTable',
    props: {
        headers: { type: [Array, Object] },
        items:   { type: [Array, Object] }
    },
    methods: {
        onHeaderClicked(header) {
            console.log('Header Clicked', header);
        },
        onRowClick(item) {
            console.log('Item Clicked: ', item);
        },
        getItemProp(headerProperty, item) {
            return item[headerProperty];
        }
    }
}
</script>

<style lang="scss">
</style>
