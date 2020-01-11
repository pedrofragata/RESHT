<template>
    <div>
        <TheNav />
        <div class="profile">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-6 is-offset-1">
                        <div class="box">
                            <h4 class="title is-4 has-text-grey-light">Dados Pessoais</h4>
                            <form>
                                <div class="field is-horizontal">
                                    <!-- div dummy -->
                                    <div class="field-label">
                                        <label class="label"></label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control has-icons-left">
                                                <img src="https://via.placeholder.com/150" />
                                                <span class="icon is-small is-pulled-right">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label has-text-grey-lighter">Nome</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control has-icons-right">
                                                <input class="input is-static" type="text" value="Nome Apelido" readonly>
                                                <span class="icon is-small is-right">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label has-text-grey-lighter">Sobre</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">
                                                <textarea class="textarea" readonly>Sou um utilizador desta bela plataforma.</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label has-text-grey-lighter">Email</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control has-icons-left">
                                                <input class="input is-static" type="email" value="91-----@esmad.ipp.pt" readonly>
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label has-text-grey-lighter">Palavra passe</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control has-icons-left has-icons-right">
                                                <input class="input is-static" type="password" value="---" readonly>
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-key"></i>
                                                </span>
                                                <span class="icon is-small is-right">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="box">
                            <h4 class="title is-4 has-text-grey-light">Reservas</h4>
                            <span>Ainda não efetuou reservas.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "sponsor",
    components: {
        TheNav,
        TheFooter
    }
}
</script>

<style src="@/scss/profile.scss" lang="scss"></style>