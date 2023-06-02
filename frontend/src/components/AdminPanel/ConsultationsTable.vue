<template>
    <section>
        <my-title class="title">Таблица "Заявки на консультацию"</my-title>

        <table class="table">
            <thead>
                <tr>
                    <th class="id" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">ID</th>
                    <th class="name">Имя</th>
                    <th class="date">Дата</th>
                    <th class="tel">Номер</th>
                    <th class="options">Опции</th>
                </tr>
            </thead>
            
            <tbody>
                <transition-group name="list-complete">
                    <tr v-for="(item, index) in consultations" :key="index" class="list-complete-item">
                        <td data-label="ID" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ ++index }}</td>
                        <td data-label="Имя">{{ item.name }}</td>
                        <td data-label="Дата">{{ getDate(item.created_at) }}</td>
                        <td data-label="Номер">{{ item.phone }}</td>
                        <td data-label="Опции"  :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">
                            <div class="button delete">
                                <span class="material-symbols-outlined" @click="deleteConsultation(item.id)">
                                    delete
                                </span>
                            </div>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <div class="loader">
                <my-loader v-if="!consultations.length"/>
            </div>
    </section>
</template>
<script>
import MyTitle from '@/components/UI/MyTitle.vue'
import MyLoader from '@/components/UI/MyLoader.vue';
export default {
    components: { MyTitle, MyLoader },

    mounted() {
        this.$store.dispatch('GET_CONSULTATIONS');
    },

    computed: {
        consultations() {
            return this.$store.getters.CONSULTATIONS;
        }
    },

    methods: {

        getDate(date) {
            return date[8] + date[9] + '.' + date[5] + date[6] + '.' + date[0] + date[1] + date[2] + date[3];
        },

        deleteConsultation(id) {
            let url = `http://127.0.0.1:8000/api/consultation/${id}`
            this.$store.dispatch('DELETE_CONSULTATIONS', url)
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
    width: 23%;
}

.date {
    width: 23%;
}

.tel {
    width: 23%;
}

.options {
    width: 23%;
}

.delete {
    cursor: pointer;

    &:hover {
        color: red;
    }
}

.loader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

// .list-complete-item {
//   transition: all 0.8s ease-in-out;
// //   display: block;
// }

// .list-complete-enter-from,
// .list-complete-leave-to {
//   opacity: 0;
//   transform: translateX(-50px);
// } 

// .list-complete-leave-active {
//   position: absolute;
// }

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
}
</style>