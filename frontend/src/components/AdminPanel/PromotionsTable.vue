<template>
    <section>
        <my-title class="title">Таблица "Акции"</my-title>

        <table class="table">
            <thead>
                <tr>
                    <th class="id" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">ID</th>
                    <th class="name">Название</th>
                    <th class="beginning">Начало </th>
                    <th class="ending">Окончание </th>
                    <th class="description">Описание</th>
                    <th class="options">Опции</th>
                </tr>
            </thead>
            
            <tbody>
                <transition-group name="list-complete">
                    <tr v-for="(item, index) in PROMOTIONS" :key="index" class="list-complete-item">
                        <td data-label="ID" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ ++index }}</td>
                        <td data-label="Название">{{ item.title }}</td>
                        <td data-label="Начало акции" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ getDate(item.beginning) }}</td>
                        <td data-label="Окончание акции" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ getDate(item.ending) }}</td>
                        <td data-label="Описание">{{ item.description }}</td>
                        <td data-label="Опции"  >
                            <div class="buttons">
                                <div class="edit">
                                <span class="material-symbols-outlined" @click="editEntry(item)">edit</span>
                            </div>
                            <div class="delete">
                                <span class="material-symbols-outlined" @click="deleteEntry(item.id)">delete</span>
                            </div>
                            </div>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <my-button class="add_button" @click="this.$store.commit('AddPromotionModalWindow')">Добавить запись</my-button>
        <transition name="fade">
            <EditPromotionModalWindow v-if="this.$store.getters.EditPromotionModalWindow" :item="item"/>
        </transition>
        <transition name="fade">
            <AddPromotionModalWindow v-if="this.$store.getters.AddPromotionModalWindow" />
        </transition>
        <div class="loader">
            <my-loader v-if="!PROMOTIONS.length"/>
        </div>
    </section>
</template>
<script>
import url from '@/url.js'
import MyTitle from '@/components/UI/MyTitle.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyLoader from '@/components/UI/MyLoader.vue';
import AddPromotionModalWindow from '@/components/AdminPanel/modalWindows/AddPromotionModalWindow.vue';
import EditPromotionModalWindow from '@/components/AdminPanel/modalWindows/EditPromotionModalWindow.vue';
export default {
    components: { MyTitle, MyLoader, MyButton, AddPromotionModalWindow, EditPromotionModalWindow },

    mounted() {
        this.$store.dispatch('GET_PROMOTIONS');
    },

    computed: {
        PROMOTIONS() {
            return this.$store.getters.PROMOTIONS;
        },
    },

    methods: {

        getDate(date) {
            return date[8] + date[9] + '.' + date[5] + date[6] + '.' + date[0] + date[1] + date[2] + date[3];
        },

        editEntry(item) {
            this.item = item
            this.$store.commit('EditPromotionModalWindow')
        },

        deleteEntry(id) {
            let request = `${url}/api/promotions/${id}`
            this.$store.dispatch('DELETE_PROMOTION', request)
        },
    },
}
</script>
<style lang="scss" scoped>

section {
    padding: 30px 0 30px;
    
}

.title {
            text-align: left;
            margin-top: 0px;
        }
.table{
    margin-top: 20px;
	width: 100%;
	border-collapse: collapse;

    font-family: 'Rubik';
    font-style: normal;
    font-size: 16px;
    line-height: 19px;


    color: #1E1E1E;
}

.table td,.table th{
  padding:12px 15px;
  border:1px solid #ddd;
  text-align: left;
  font-size:16px;
  font-weight: 400;
}

.table th{
	background-color: #1E1E1E;
	color:#ffffff;
}

.table tbody tr:nth-child(even){
	background-color: #f5f5f5;
}

.id {
    width: 6%;
    // border-radius: 5px 0 0 0;
}

.name {
    width: 13%;
}

.beginning {
    width: 11%;
}

.ending {
    width: 11%;
}

.description {
    width: 45%;
}

.options {
    width: 17%;
}

.delete {
    cursor: pointer;

    &:hover {
        color: red;
    }
}
.edit {
    cursor: pointer;

    &:hover {
        color: rgb(10, 204, 10);
    }
}

.buttons {
    margin: 0 auto;
    max-width: 85px;
    display: flex;
    justify-content: space-around;
}

.loader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_button {
    margin-top: 10px;
    float: right;
}

@media(max-width: 1000px){
	.table thead{
		display: none;
	}

	.table, .table tbody, .table tr, .table td{
		display: block;
		width: 100%;
	}
	.table tr{
		margin-bottom:15px;
	}
	.table td{
		text-align: right;
		padding-left: 50%;
		text-align: right;
		position: relative;
	}
	.table td::before{
		content: attr(data-label);
		position: absolute;
		left:0;
		width: 50%;
		padding-left:15px;
		font-size:15px;
		font-weight: 500;
		text-align: left;
	}

    .buttons {
        margin: 0;
        margin-left: auto;
    }
}

@media(max-width: 500px){
        .table td{
            padding-left: 50%;
            word-break: break-all;
        }
    }
</style>