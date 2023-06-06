<template>
    <div :class="['select-menu', (isActive) ? 'active' : '']" >
        <!-- {{ options }} -->
        <div class="select-btn" @click="isActive = !isActive">
            <span class="sBtn-text">{{ optionTitle }}</span>
            <i class="bx bx-chevron-down">
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </i>
        </div>

        <transition name="slide-fade">
            <ul :class="['options', (isActive) ? 'active' : '']">
                <li class="option"
                    v-for="(option, index) in options" :key="index"
                    @click="isActive = !isActive, optionTitle = option.name, changeOption(option.id)">
                    <i class="bx bxl-github" style="color: #171515;"></i>
                    <span class="option-text">{{ option.name }}</span>
                </li>
            </ul>        
        </transition>

        
    </div>
</template>
<script>
export default {

    props: {
        options: {
            type: Array,
        },
        repair_types_id: {
            type: Number,
        }
    },

    data() {
        return {
            isActive: false,
            optionTitle: (this.repair_types_id) ? this.getOptionName(this.repair_types_id) : this.options[0].name,
        }
    },

    methods: {
        changeOption(value){
            this.$emit('changeOption', value)
        },

        getOptionName(repair_type_id) {
            let name = ''
            this.options.forEach(elem => {
                if (elem.id === repair_type_id) {
                    name = elem.name;
                }
            });
            return name;
        }
    },
    
}
</script>

<style lang="scss" scoped>
.select-menu .select-btn{
    width: 400px;
    display: flex;
    height: 55px;
    background: #fff;
    
    border: 1px solid #CDCDCD;
    padding: 20px;
    font-size: 18px;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    
    transition: all .2s ease-out;
}
.select-btn i{
    font-size: 25px;
    transition: 0.3s;
}
.select-menu.active .select-btn i{
    transform: rotate(-180deg);
}
.select-menu .options{
    position: relative;
    position: absolute;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    display: none;    
    transition: all .2s ease-out;

}
.select-menu.active .options{
    
    width: 400px;
    display: block;
}

.options .option{
    display: flex;
    height: 55px;
    cursor: pointer;
    // padding: 0 16px;
    border-radius: 8px;
    align-items: center;
    background: #fff;
    transition: all .1s ease-out;
}
.options .option:hover{
    background: #F2F2F2;
    background: #1E1E1E;
    color: #F2F2F2;
    
    transition: all .2s ease-in;
}
.option i{
    font-size: 25px;
    margin-right: 12px;
}
.option .option-text{
    font-size: 18px;
    // color: #333;
}

.option .option-text:hover{
    color: #F2F2F2;
    transition: all .2s ease-in;
}

.bx-chevron-down {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 30px;
    }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 730px) {
    .select-menu .select-btn {
        width: 100%;
    }
}

@media (max-width: 525px) {
    .select-menu.active .options {
        width: 75%;
    }
}

@media (max-width: 450px) {
    .select-menu.active .options {
        width: 82%;
    }
}
</style>