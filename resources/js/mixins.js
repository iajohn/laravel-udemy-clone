import Vue from 'vue'
import { mapGetters } from 'vuex'
Vue.mixin({
    methods:{
        formatCurrency(amount){
            const price = (amount * this.conversion_rate).toFixed(2)
            const selected_currency = this.currencies.filter(c => c.code == this.currency)[0]
            if(selected_currency && selected_currency !== undefined){
                if(selected_currency.space_between){
                    if(selected_currency.symbol_position=='left') return selected_currency.symbol+ ' ' + price
                    return price + ' ' + selected_currency.symbol
                } else {
                    if(selected_currency.symbol_position=='left') return selected_currency.symbol+price
                    return price+selected_currency.symbol
                }
            }
        }
    },

    computed:{
        ...mapGetters({
            currency: 'currency/currency',
            conversion_rate: 'currency/conversion_rate',
            currencies: 'currency/currencies'
        })
    }

})