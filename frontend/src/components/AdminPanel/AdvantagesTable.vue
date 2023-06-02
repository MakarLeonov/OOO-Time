<template>
    <section>
        <my-title class="title">Таблица "Преимущества"</my-title>

        <table class="table">
            <thead>
                <tr>
                    <th class="id" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">ID</th>
                    <th class="name">Название</th>
                    <th class="description">Описание</th>
                    <th class="options">Опции</th>
                </tr>
            </thead>
            
            <tbody>
                <transition-group name="list-complete">
                    <tr v-for="(item, index) in ADVANTAGES" :key="index" class="list-complete-item">
                        <td data-label="ID" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ ++index }}</td>
                        <td data-label="Название">{{ item.title }}</td>
                        <td data-label="Описание">{{ item.description }}</td>
                        <td data-label="Опции"  >
                            <div class="buttons">
                                <div class="edit">
                                <span class="material-symbols-outlined" @click="deleteFeedback(item.id)">edit</span>
                            </div>
                            <div class="delete">
                                <span class="material-symbols-outlined" @click="deleteFeedback(item.id)">delete</span>
                            </div>
                            </div>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <div class="loader">
                <my-loader v-if="!ADVANTAGES.length"/>
            </div>
    </section>
</template>
<script>
import MyTitle from '@/components/UI/MyTitle.vue'
import MyLoader from '@/components/UI/MyLoader.vue';
export default {
    components: { MyTitle, MyLoader },

    mounted() {
        this.$store.dispatch('GET_ADVANTAGES');
    },

    computed: {
        ADVANTAGES() {
            return this.$store.getters.ADVANTAGES;
        },
    },

    methods: {
        deleteFeedback(id) {
            let url = `http://127.0.0.1:8000/api/feedback/${id}`
            this.$store.dispatch('DELETE_FEEDBACK', url)
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
    width: 25%;
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
</style>