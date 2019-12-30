<template>
<div class="login">
	<div class="hero-head">
        <Nav />
    </div>
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Login</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Registar</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Nome de utilizador</label>
					<input id="user" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<input type="submit" class="button" value="Entrar">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Esqueceu-se da sua password?</a>
				</div>
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Nome de utilizador</label>
					<input id="user" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Repetir Password</label>
					<input id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Email</label>
					<input id="pass" type="text" class="input">
				</div>
				<div class="group">
					<input type="submit" class="button" value="Registar">
				</div>
				<div class="hr"></div>
			</div>
		</div>
	</div>
	<Footer />
</div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
components: {
	Nav,
	Footer
  }
}
</script>
<style src="@/scss/login.scss" lang="scss"></style>
