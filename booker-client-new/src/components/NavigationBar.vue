<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand>
                <router-link to="/main">Booker</router-link>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="/add-event">Book it !</b-nav-item>
                    <b-nav-item href="/employees">Employees</b-nav-item>
                </b-navbar-nav>
            <!-- Right aligned nav items -->
                <template>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <template slot="button-content">
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="/profile">Profile</b-dropdown-item>
                            <b-dropdown-item href="/signout">Signout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </template>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    components: 'NavigationBar'
}
</script>

