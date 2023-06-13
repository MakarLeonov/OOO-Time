<template>
	<div>
		<my-title class="title">Обслуживаемые марки</my-title>
		<main>
			<div class="caruserl">
				<span class="move_button" @click="leftMove">&#139;</span>
			<section>
				<div class="product" v-for="(mark, index) in marksList" :key="index" >
					<img class="slider_img" :src="getImgUrl(mark)" alt="img">
				</div>
			</section>
			<span class="move_button" @click="rightMove">&#155;</span>
			</div>
		</main>
	</div>
</template>
<script>
import MyTitle from "@/components/UI/MyTitle.vue";
export default {
    name: "vMarksCarusel",
    components: {
        MyTitle,
    },

    data() {
        return {
            marksList: [
				'ford.png',
				'volkswagen2.png',
				'toyota2.jpeg',
				'honda2.jpg',
				'chevolet2.png',
				'kia2.jpg',
				'bmw.jpg',
				'mitsubishi.jpg',
				'skoda.png',
				'mercedes3.jpg',
				// 'mercedes2.jpg',
            ],
			tail: 4,
            l: 0,
            movePer: 0,
            maxMove: 0,
            product: document.getElementsByClassName('product'),
            slideInterval: null,
            sliderIteration: 0,
            slidesBack: false,
        }
    },

    methods: {
        rightMove() {
            this.l += this.movePer;
            if (this.product == 1) { this.l = 0; }
            for(const i of this.product)
            {
                if (this.l > this.maxMove){this.l -= this.movePer;}
                i.style.left = '-' + this.l + '%';
            }
			this.sliderIteration++;
        },

        leftMove() {
            const product_page = this.marksList.length/4;
            this.l -= this.movePer;
            if (this.l <= 0){ this.l = 0 }
            for(const i of this.product){
                if (product_page > 1){
                    i.style.left = '-' + this.l + '%';
                }
            }
			this.sliderIteration++;
        },

        checkWidth() {
            if (this.screenWidthNow <= 1000) {
                this.movePer = 50.8;
                this.maxMove = 406;
				this.tail = 2;
            } else {
                this.movePer = 25.34;
	            this.maxMove = 203;
				this.tail = 4;
            }
        },

		getImgUrl(pic) {
			return require('../../assets/img/marks2/' + pic);
		},
    },

    mounted() {
        this.checkWidth()
        window.addEventListener('resize', () => {
            this.checkWidth();
        })

        this.slideInterval = setInterval(() => {
            if (this.slidesBack === false) {
                this.rightMove();
            } else {
                this.leftMove();
            }
			
			if (this.sliderIteration === (this.marksList.length - 4)) {
				this.sliderIteration = 0;
				this.slidesBack = !this.slidesBack;
			}
        }, 2000)
    },



    computed: {
        screenWidthNow() {
            return this.$store.getters.screenWidth;
        }
    },

    
}


</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    
	main{
		width: 100%;
		/*background: red;*/
		margin: 10px auto;
		position: relative;
		padding: 5px 0 30px;
	}
	main .text{
		padding: 10px;
		text-align: center;
		/*font-size: 30px;*/
		color: #554;
	}
	.text h1{
		font-size: 50px;
	}
	.text p{
		width: 60%;
		padding: 5px;
		margin: auto;
		line-height: 30px;
	}
	
	section{
		width: 64%;
		display: flex;
		align-items: center;
		overflow-x: auto;
	}
	section::-webkit-scrollbar{
		display: none;
	}
	section .product{
		min-width: 24%;
		margin:  0 20px  0 0;
		padding: 15px 55px;
		border-radius: 20px;
		position: relative;
		left: 0;
		transition: 1s;

		& > .slider_img {
			width: 80%;  // v1


			width: 90%;  // v2
			padding: 15px;
			border: 1px solid #b3b3b366;
			border-radius: 8px;
		}
	}
	
	

	picture{
		width: 100%;
		height: 70%;
		padding: 20px;
		/*background: green;*/
		display: flex;
		overflow: hidden;
		margin-bottom: 20px;
	}
	picture img{
		width: 100%;
	}
	.detail,
	.button{
		width: 90%;
		/*background: red;*/
		margin: auto;
		padding: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		font-size: 20px;
		color: #444;
	}
	small{color: #555;}
	a{
		text-decoration: none;
		padding: 6px 14px;
		font-size: 15px;
		margin: 5px 0 0 20px;
		display: inline-block;
		background: #6773ff;
		color: white;
	}
	p.star{
		margin: 5px auto;
		width: 65%;
		font-size: 25px;
		color: #808080;
	}

	.caruserl {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.move_button {
		font-size: 45px;
		cursor: pointer;
		color: #555;
			width: 30px;
		height: 30px;
		display: inline-block;
		line-height: 19px;
		text-align: center;
		border-radius: 3px;
		font-weight: bold;

		-webkit-touch-callout: none; 
		-webkit-user-select: none; 
		-khtml-user-select: none; 
		-moz-user-select: none; 
		-ms-user-select: none; 
		user-select: none;
	}

	@media (max-width: 1600px) {
		section .product {
			min-width: 29%;
		}
	}

	@media (max-width: 1300px) {
		section .product {
			padding: 15px 32px;
		}
	}

	@media (max-width: 1000px) {
		.text h1{
			font-size: 35px;
		}
		.text p{
			width: 90%;
		}
		header h1{
			font-size: 25px;
		}
		header p span{
			font-size: 30px;
		}
		section .product {
			min-width: 49%;
			margin:  0 10px  0 0;
		}
		.detail, .button{
			font-size: 16px;
		}
		a{
			padding: 6px 10px;
		}
	}

	@media (max-width: 600px) {
		section .product {
			padding: 15px 20px;
		}

		section {
			width: 80%;
		}
	}

	@media (max-width: 500px) {
		section .product {
			padding: 15px 24px;
		}
	}

	@media (max-width: 460px) {
		section .product {
			padding: 15px 16px;
		}
	}
    
</style>