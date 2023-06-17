<template>
    <section>
        <my-title class="title">Таблица "Услуги"</my-title>

        <table class="table">
            <thead>
                <tr>
                    <th class="id" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">ID</th>
                    <th class="name">Название</th>
                    <th class="cost">Цена</th>
                    <th class="is_popular">Популяр ность</th>
                    <th class="repair_type">Тип неисправности</th>
                    <th class="description">Описание</th>
                    <th class="options">Опции</th>
                </tr>
            </thead>
            
            <tbody>
                <transition-group name="list-complete">
                    <tr v-for="(item, index) in SERVICE" :key="index" class="list-complete-item">
                        <td data-label="ID" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ ++index }}</td>
                        <td data-label="Название">{{ item.name }}</td>
                        <td data-label="Цена" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ item.cost }}</td>
                        <td data-label="is_popular" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ getPopularity(item.is_popular) }}</td>
                        <td data-label="Тип неисправности">{{ getRepairType(item.repair_types_id) }}</td>
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
        <my-button class="add_button" @click="this.$store.commit('AddServiceModalWindow')">Добавить запись</my-button>
        <transition name="fade">
            <EditServiceModalWindow v-if="this.$store.getters.EditServiceModalWindow" :item="item"/>
        </transition>
        <transition name="fade">
            <AddServiceModalWindow v-if="this.$store.getters.AddServiceModalWindow" />
        </transition>
        <div class="loader">
                <my-loader v-if="!SERVICE.length"/>
            </div>
    </section>
</template>
<script>
import url from '@/url.js'
import MyTitle from '@/components/UI/MyTitle.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyLoader from '@/components/UI/MyLoader.vue';
import AddServiceModalWindow from '@/components/AdminPanel/modalWindows/AddServiceModalWindow.vue';
import EditServiceModalWindow from '@/components/AdminPanel/modalWindows/EditServiceModalWindow.vue';
export default {
    components: { MyTitle, MyLoader, MyButton, AddServiceModalWindow, EditServiceModalWindow },

    mounted() {
        this.$store.dispatch('GET_SERVICE');
    },

    computed: {
        SERVICE() {
            return this.$store.getters.SERVICE;
        },
        
        REPAIR_TYPES() {
            return this.$store.getters.REPAIR_TYPES;
        }
    },

    methods: {
        getPopularity(num) {
            if (num === 1) {
                return 'Высокая';
            } else {
                return 'Низкая';
            }
        },

        getRepairType(id) {
            let name = ''
            this.REPAIR_TYPES.forEach(elem => {
                if (elem.id === id) {
                    name = elem.name
                }
            });
            return name
        },

        editEntry(item) {
            this.item = item
            this.$store.commit('EditServiceModalWindow')
        },

        deleteEntry(id) {
            let request = `${url}/service/${id}`
            this.$store.dispatch('DELETE_SERVICE_ENTRY', request)
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
    width: 10%;
}

.cost {
    width: 5%;
}

.is_popular {
    width: 5%;
}

.description {
    width: 50%;
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

@media(max-width: 500px){
    .table td{
        padding-left: 50%;
        word-break: break-all;
    }
}
</style>