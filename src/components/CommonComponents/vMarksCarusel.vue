<template>
    <main>
		<header>
			<p>
				<span @click="leftMove">&#139;</span>
				<span @click="rightMove">&#155;</span>
                <br> {{ screenWidthNow }}
			</p>
		</header>
		<div class="caruserl">
			<span class="move_button" @click="leftMove">&#139;</span>
		<section>
            <div class="product" v-for="(mark, index) in marksList" :key="index" >
                <img class="slider_img" src="@/assets/img1.png" alt="img">
				<!-- {{ mark }} -->
            </div>
		</section>
		<span class="move_button" @click="rightMove">&#155;</span>
		</div>
	</main>
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
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
            ],
			tail: 4,
            l: 0,
            movePer: 0,
            maxMove: 0,
            // mobView: window.matchMedia("(max-width: 768px)"),
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
                console.log(this.screenWidthNow)
                this.movePer = 50.36;
                this.maxMove = 504;
				this.tail = 2;
            } else {
                console.log(this.screenWidthNow)
                this.movePer = 25.34;
	            this.maxMove = 203;
				this.tail = 4;
            }
        }
    },

    mounted() {
        this.checkWidth()
        window.addEventListener('resize', () => {
            this.checkWidth();
        })

        this.slideInterval = setInterval(() => {
            if (this.slidesBack === false) {
                // this.sliderIteration++;
                this.rightMove();
            } else {
                // this.sliderIteration
				// this.sliderIteration++;
                this.leftMove();
            }
			
			if (this.sliderIteration === (this.marksList.length - this.tail)) {
				this.sliderIteration = 0;
				this.slidesBack = !this.slidesBack;
			}
        }, 2000)
    },



    computed: {
        screenWidthNow() {
            return this.$store.state.screenWidth;
        }
    }

    
}


</script>
<style lang="scss" scoped>
@import "@/assets/assets.scss";
    
		main{
			width: 100%;
			height: 840px;
			/*background: red;*/
			margin: 10px auto;
			position: relative;
			padding: 5px 0;
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
		main header{
			width: 98%;
			height: 60px;
			margin: 0 auto;
			/*background: gray;*/
			display: flex;
			align-items: center;
			padding: 20px;
			justify-content: space-between;
			border-bottom: 2px solid #ddd;
		}
		header p span{
			font-size: 40px;
		    margin: 0 5px;
		    cursor: pointer;
		    color: #555;
		     width: 30px;
		    height: 30px;
		    display: inline-block;
		    line-height: 19px;
		    text-align: center;
		    border-radius: 3px;
		}
		header p span:hover{
			background: #222;
    		color: white;
		}
		section{
			width: 80%;
			height: 230px;
			/*background: red;*/
			display: flex;
			align-items: center;
			overflow-x: auto;
		}
		section::-webkit-scrollbar{
			display: none;
		}
		section .product{
			min-width: 24%;
			// height: 90%;
			// background: whitesmoke;
			margin:  0 20px  0 0;
			padding: 55px;
			border-radius: 20px;
			position: relative;
			left: 0;
			transition: 1s;

			& > .slider_img {
				width: 100%;
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
    
</style>