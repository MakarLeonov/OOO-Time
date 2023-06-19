<template>
    <section>
        <my-title class="title">Таблица "Отзывы"</my-title>

        <table class="table">
            <thead>
                <tr>
                    <th class="id" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">ID</th>
                    <th class="author">Автор</th>
                    <th class="date">Дата</th>
                    <th class="rating">Рейтинг</th>
                    <th class="feedback">Отзыв</th>
                    <th class="options">Опции</th>
                </tr>
            </thead>
            
            <tbody>
                <transition-group name="list-complete">
                    <tr v-for="(item, index) in feedback" :key="index" class="list-complete-item">
                        <td data-label="ID" :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">{{ ++index }}</td>
                        <td data-label="Автор">{{ item.author }}</td>
                        <td data-label="Дата">{{ getDate(item.date) }}</td>
                        <td data-label="Рейтинг">
                            <img 
                                :src="getImgUrl(index, item.rating)"
                                alt="⭐"
                                v-for="index in 5" 
                                :key="index"
                            >     
                        </td>
                        <td data-label="Отзыв">{{ item.feedback_text }}</td>
                        <td data-label="Опции"  :style="[(this.$store.getters.screenWidth > 1000) ? 'text-align: center;' : 'text-align: right;']">
                            <div class="button delete">
                                <span class="material-symbols-outlined" @click="deleteFeedback(item.id)">
                                    delete
                                </span>
                            </div>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <div class="loader">
                <my-loader v-if="!feedback.length"/>
            </div>
    </section>
</template>
<script>
import url from '@/url.js'
import MyTitle from '@/components/UI/MyTitle.vue'
import MyLoader from '@/components/UI/MyLoader.vue';
export default {
    components: { MyTitle, MyLoader },

    mounted() {
        this.$store.dispatch('GET_FEEDBACK');
    },

    computed: {
        feedback() {
            return this.$store.getters.FEEDBACK;
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

        deleteFeedback(id) {
            let request = `${url}/api/feedback/${id}`
            this.$store.dispatch('DELETE_FEEDBACK', request)
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
    width: 4%;
    // border-radius: 5px 0 0 0;
}

.author {
    width: 10%;
}

.date {
    width: 10%;
}

.rating {
    width: 10%;
}

.feedback {
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
}

@media(max-width: 500px){
        .table td{
            padding-left: 50%;
            word-break: break-all;
        }
    }
</style>