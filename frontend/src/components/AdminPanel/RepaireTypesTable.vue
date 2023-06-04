<template>
    <section>
        <my-title class="title">Таблица "Виды неисправностей"</my-title>

        <table class="table">
            <thead>
                <tr>
                    <th class="id" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">ID</th>
                    <th class="name">Название</th>
                    <th class="service">Кол-во услуг</th>
                    <th class="description">Описание</th>
                    <th class="options">Опции</th>
                </tr>
            </thead>
            
            <tbody>
                <transition-group name="list-complete">
                    <tr v-for="(item, index) in REPAIR_TYPES" :key="index" class="list-complete-item">
                        <td data-label="ID" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ ++index }}</td>
                        <td data-label="Название">{{ item.name }}</td>
                        <td data-label="Количество услуг" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ item.service.length }}</td>
                        <td data-label="Описание">{{ item.description }}</td>
                        <td data-label="Опции"  >
                            <div class="buttons">
                                <div class="edit">
                                <span class="material-symbols-outlined" @click="editEntry(item)">edit</span>
                            </div>
                            <div class="delete">
                                <span class="material-symbols-outlined" @click="dleteEntry(item.id)">delete</span>
                            </div>
                            </div>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <my-button class="add_button" @click="this.$store.commit('RepaireTypesModalWindow')">Добавить запись</my-button>
        <transition name="fade">
            <EditRepairTypesModalWindow v-if="this.$store.getters.EditRepairTypesModalWindow" :item="item"/>
        </transition>
        <transition name="fade">
            <AddRepaireTypesModalWindow v-if="this.$store.getters.AddRepaireTypesModalWindow" />
        </transition>
        <div class="loader">
                <my-loader v-if="!REPAIR_TYPES.length"/>
        </div>
    </section>
</template>
<script>
import MyTitle from '@/components/UI/MyTitle.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyLoader from '@/components/UI/MyLoader.vue';
import AddRepaireTypesModalWindow from '@/components/AdminPanel/modalWindows/AddRepaireTypesModalWindow.vue';
import EditRepairTypesModalWindow from '@/components/AdminPanel/modalWindows/EditRepairTypesModalWindow.vue';
export default {
    components: { MyTitle, MyLoader, MyButton, AddRepaireTypesModalWindow, EditRepairTypesModalWindow },
    data() {
        return {
            item: {}
        }
    },
    mounted() {
        this.$store.dispatch('GET_REPAIR_TYPES');
    },

    computed: {
        REPAIR_TYPES() {
            return this.$store.getters.REPAIR_TYPES;
        }
    },

    methods: {
        getImgUrl(index, rating) {
            if (index <= rating) {
                return require('../../assets/img/icons/fully_star.png');
            } else {
                return require('../../assets/img/icons/empty_star.png');
            }
        },

        getDate(date) {
            return date[8] + date[9] + '.' + date[5] + date[6] + '.' + date[0] + date[1] + date[2] + date[3];
        },

        editEntry(item) {
            this.item = item
            this.$store.commit('EditRepairTypesModalWindow')
        },

        dleteEntry(id) {
            let url = `http://127.0.0.1:8000/api/repair_types/${id}`
            this.$store.dispatch('DELETE_REPAIR_TYPE', url)
        },
    },
}
</script>
<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
    width: 4%;
    // border-radius: 5px 0 0 0;
}

.name {
    width: 15%;
}

.service {
    width: 10%;
}

.description {
    width: 30%;
}

.options {
    width: 10%;
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

.add_button {
    margin-top: 10px;
    float: right;
}

.loader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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