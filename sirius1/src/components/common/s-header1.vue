<template>
    <div>
        <s-header :mTitle="'MMall登录'"></s-header>
        <section>
            <div class="login-page">
                <div class="img-logo">
                    <img src="../../assets/sirius/icon_login_logo.png">
                </div>
                <div class="login-text">
                    <input @mouseenter="focusText"
                            @mouseleave="blurText" v-model="username" type="text" class="login-username" placeholder="Email address" />
                     <i class="iconfont icon-close" data-close="username" v-show="!usernameClose" @click="clearText"></i>
                </div>
                <div class="login-text">
                    <input @mouseenter="focusText"
                            @mouseleave="blurText" v-model="password" type="password" class="login-password" placeholder="Password" />
                     <img src="../../assets/sirus/icon_password_hidden.png" class="iv-switch-pass">       
                     <i class="iconfont icon-close" data-close="password" v-show="!passwordClose" @click="clearText"></i>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import sHeader from 'components/common/s-header1'

export default {
    data() {
        return {
            isLogin: false
        } 
    },
    components: {
        sHeader        
    }
}
</script>

<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';

    .login-page {
        position: relative;
        margin-top: 128px;
        background: #ff4e505f;
        width: 100%;
        height: 100%;
        padding: 0px 20px;
        .img-logo {
            margin: 20px auto;
            width: 200px;
            height: 80px;
        }
        .login-text {
            margin-top: 20px;
            background: #fff;
            font-size: 20px;
            line-height: 50px;
            height: 50px;
        }
        input {
            width: 100%;
            height: 100%;
            margin-right: 20px;
            line-height: 50px;
            color: #333;
            font-size: 32px;
            &.login-password{
                width: 85%;
            }
        }
        .iv-switch-pass {
            width: 30px;
            height: 30px;
            padding: 15px 0;
        }

    }

</style>