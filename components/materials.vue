<template>
    <div>

        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>

        <br/>
        <br/>

        <div id="div-progress">
            <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="value"
                    color="teal"
            >
                {{ value }}
            </v-progress-circular>

            <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="-90"
                    :value="value"
                    color="primary"
            >
                {{ value }}
            </v-progress-circular>

            <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="90"
                    :value="value"
                    color="red"
            >
                {{ value }}
            </v-progress-circular>

            <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="180"
                    :value="value"
                    color="pink"
            >
                {{ value }}
            </v-progress-circular>

            <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="180"
                    :value="value"
                    color="orange"
            >
                {{ value }}
            </v-progress-circular>
        </div>

        <br/>
        <br/>

        <div class="text-xs-center">
            <v-pagination :length="6" v-model="page" :key="1"></v-pagination>
        </div>

        <br/>
        <br/>

        <v-layout justify-space-around>
            <v-icon large color="green darken-2">business</v-icon>

            <v-icon large color="blue darken-2">chat</v-icon>

            <v-icon large color="purple darken-2">dialpad</v-icon>

            <v-icon large color="teal darken-2">email</v-icon>

            <v-icon large color="blue-grey darken-2">call_split</v-icon>

            <v-icon large color="orange darken-2">present_to_all</v-icon>
        </v-layout>

        <br/>
        <br/>

        <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
            <v-toolbar color="pink">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="white--text">My Music</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card>
                <v-container
                        fluid
                        style="min-height: 0;"
                        grid-list-lg
                >
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card color="blue-grey darken-2" class="white--text">
                                <v-card-title primary-title>
                                    <div class="headline">Unlimited music now</div>
                                    <div>Listen to your favorite artists and albums whenever and wherever, online and
                                        offline.
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark>Listen now</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="cyan darken-2" class="white--text">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-flex xs7>
                                            <div>
                                                <div class="headline">Supermodel</div>
                                                <div>Foster the People</div>
                                            </div>
                                        </v-flex>
                                        <v-flex xs5>
                                            <v-card-media
                                                    src="https://vuetifyjs.com/static/doc-images/cards/foster.jpg"
                                                    height="125px"
                                                    contain
                                            ></v-card-media>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="purple" class="white--text">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-flex xs7>
                                            <div>
                                                <div class="headline">Halycon Days</div>
                                                <div>Ellie Goulding</div>
                                            </div>
                                        </v-flex>
                                        <v-flex xs5>
                                            <v-card-media
                                                    src="https://vuetifyjs.com/static/doc-images/cards/halcyon.png"
                                                    height="125px"
                                                    contain
                                            ></v-card-media>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </div>

        <br/>
        <br/>

        <v-layout column>
            <v-flex xs12 sm6 offset-sm3>
                <v-toolbar color="indigo" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Discover</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <v-flex
                                    v-for="card in cards"
                                    v-bind="{ [`xs${card.flex}`]: true }"
                                    :key="card.title"
                            >
                                <v-card>
                                    <v-card-media
                                            :src="card.src"
                                            height="200px"
                                    >
                                        <v-container fill-height fluid>
                                            <v-layout fill-height>
                                                <v-flex xs12 align-end flexbox>
                                                    <span class="headline white--text" v-text="card.title"></span>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-media>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            <v-icon>favorite</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                            <v-icon>bookmark</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                            <v-icon>share</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>

        <br/>
        <br/>

        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="light-blue" light extended>
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                        <v-btn
                                fab
                                small
                                color="cyan accent-2"
                                bottom
                                left
                                absolute
                                @click.native.stop="dialog = !dialog"
                        >
                            <v-icon>add</v-icon>
                        </v-btn>
                        <v-toolbar-title slot="extension" class="white--text">My files</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>view_module</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list two-line subheader>
                        <v-subheader inset>Folders</v-subheader>
                        <v-list-tile v-for="item in items" :key="item.title" avatar>
                            <v-list-tile-avatar>
                                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn icon>
                                    <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider inset></v-divider>
                        <v-subheader inset>Files</v-subheader>
                        <v-list-tile v-for="item in items2" :key="item.title" avatar>
                            <v-list-tile-avatar>
                                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn icon ripple>
                                    <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                            <v-card-text>
                                <v-text-field label="File name"></v-text-field>
                                <small class="grey--text">* This doesn't actually save.</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click.native="dialog = false">Submit</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-flex>
        </v-layout>

        <br/>
        <br/>

        <div class="text-xs-center">
            <v-bottom-sheet v-model="sheet">
                <v-btn slot="activator" color="purple" dark>Click me</v-btn>
                <v-list>
                    <v-subheader>Open in</v-subheader>
                    <v-list-tile
                            v-for="tile in tiles"
                            :key="tile.title"
                            @click="sheet = false"
                    >
                        <v-list-tile-avatar>
                            <v-avatar size="32px" tile>
                                <img :src="`https://vuetifyjs.com/static/doc-images/bottom-sheets/${tile.img}`"
                                     :alt="tile.title">
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-bottom-sheet>
        </div>

        <br/>
        <br/>

        <div>
            <v-alert :value="true" outline color="success" icon="check_circle">
                This is a success alert.
            </v-alert>

            <v-alert :value="true" outline color="info" icon="info">
                This is an info alert.
            </v-alert>

            <v-alert :value="true" outline color="warning" icon="priority_high">
                This is a warning alert.
            </v-alert>

            <v-alert :value="true" outline color="error" icon="warning">
                This is a error alert.
            </v-alert>
        </div>

        <br/>
        <br/>

        <div class="text-xs-center">
            <v-btn round color="primary" dark>Rounded Button</v-btn>
        </div>

        <br/>
        <br/>

        <div class="text-xs-center">
            <v-btn outline color="indigo">Outline Button</v-btn>
            <v-btn outline fab color="teal">
                <v-icon>list</v-icon>
            </v-btn>
            <v-btn outline large fab color="indigo">
                <v-icon>edit</v-icon>
            </v-btn>
        </div>

        <br/>
        <br/>

        <v-container fluid class="pa-0">
            <v-layout row wrap align-center>
                <v-flex xs12 sm6>
                    <div class="text-xs-center">
                        <div>
                            <v-btn small color="primary" dark>Small Button</v-btn>
                        </div>
                        <div>
                            <v-btn color="warning" dark>Normal Button</v-btn>
                        </div>
                        <div>
                            <v-btn color="error" dark large>Large Button</v-btn>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm6>
                    <div class="text-xs-center">
                        <div>
                            <v-btn color="primary" fab small dark>
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </div>
                        <div>
                            <v-btn color="warning" fab dark>
                                <v-icon>account_circle</v-icon>
                            </v-btn>
                        </div>
                        <div>
                            <v-btn color="error" fab large dark>
                                <v-icon>alarm</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

        <br/>
        <br/>

        <div class="text-xs-center">
            <v-btn
                    :loading="loading"
                    :disabled="loading"
                    color="secondary"
                    @click.native="loader = 'loading'"
            >
                Accept Terms
            </v-btn>

            <v-btn
                    :loading="loading3"
                    :disabled="loading3"
                    color="blue-grey"
                    class="white--text"
                    @click.native="loader = 'loading3'"
            >
                Upload
                <v-icon right dark>cloud_upload</v-icon>
            </v-btn>

            <v-btn
                    :loading="loading2"
                    :disabled="loading2"
                    color="success"
                    @click.native="loader = 'loading2'"
            >
                Custom Loader
                <span slot="loader">Loading...</span>
            </v-btn>

            <v-btn
                    :loading="loading4"
                    :disabled="loading4"
                    color="info"
                    @click.native="loader = 'loading4'"
            >
                Icon Loader
                <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
            </v-btn>
        </div>

        <br/>
        <br/>

        <div class="text-xs-center">
            <v-btn fab dark small color="primary">
                <v-icon dark>remove</v-icon>
            </v-btn>
            <v-btn fab dark small color="pink">
                <v-icon dark>favorite</v-icon>
            </v-btn>
            <v-btn fab dark color="indigo">
                <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn fab dark color="teal">
                <v-icon dark>list</v-icon>
            </v-btn>
            <v-btn fab dark large color="cyan">
                <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark large color="purple">
                <v-icon dark>android</v-icon>
            </v-btn>
        </div>

        <br/>
        <br/>

        <div>
            <v-btn color="success">Success</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn color="warning">Warning</v-btn>
            <v-btn color="info">Info</v-btn>
        </div>

        <br/>
        <br/>

        <v-container id="dropdown-example" grid-list-xl>
            <v-layout row wrap>
                <v-flex xs12 sm4>
                    <p>Overflow</p>
                    <v-select
                            :items="dropdown_font"
                            overflow
                            label="Select"
                            target="#dropdown-example"
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm4>
                    <p>Segmented</p>
                    <v-select
                            :items="dropdown_icon"
                            label="Select"
                            segmented
                            target="#dropdown-example"
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm4>
                    <p>Editable</p>
                    <v-select
                            :items="dropdown_edit"
                            label="Select"
                            editable
                            item-value="text"
                    ></v-select>
                </v-flex>
            </v-layout>
        </v-container>

        <br/>
        <br/>

        <v-card flat>
            <v-card-text>
                <v-container fluid class="pa-0">
                    <v-layout row wrap>
                        <v-flex xs12>
                            <p>Normal</p>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn flat icon color="pink">
                                <v-icon>favorite</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn flat icon color="indigo">
                                <v-icon>star</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn flat icon color="green">
                                <v-icon>cached</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn flat icon color="deep-orange">
                                <v-icon>thumb_up</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mt-5">
                        <v-flex xs12>
                            <p>Disabled</p>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn icon disabled>
                                <v-icon>favorite</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn icon disabled>
                                <v-icon>star</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn icon disabled>
                                <v-icon>cached</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm3>
                            <v-btn icon disabled>
                                <v-icon>thumb_up</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        components: {},

        data: function () {
            return {
                interval: {},
                value: 0,
                page: 1,
                cards: [
                    {
                        title: "Pre-fab homes",
                        src: "https://vuetifyjs.com/static/doc-images/cards/house.jpg",
                        flex: 12
                    },
                    {
                        title: "Favorite road trips",
                        src: "https://vuetifyjs.com/static/doc-images/cards/road.jpg",
                        flex: 6
                    },
                    {
                        title: "Best airlines",
                        src: "https://vuetifyjs.com/static/doc-images/cards/plane.jpg",
                        flex: 6
                    }
                ],
                dialog: false,
                items: [
                    {
                        icon: "folder",
                        iconClass: "grey lighten-1 white--text",
                        title: "Photos",
                        subtitle: "Jan 9, 2014"
                    },
                    {
                        icon: "folder",
                        iconClass: "grey lighten-1 white--text",
                        title: "Recipes",
                        subtitle: "Jan 17, 2014"
                    },
                    {
                        icon: "folder",
                        iconClass: "grey lighten-1 white--text",
                        title: "Work",
                        subtitle: "Jan 28, 2014"
                    }
                ],
                items2: [
                    {
                        icon: "assignment",
                        iconClass: "blue white--text",
                        title: "Vacation itinerary",
                        subtitle: "Jan 20, 2014"
                    },
                    {
                        icon: "call_to_action",
                        iconClass: "amber white--text",
                        title: "Kitchen remodel",
                        subtitle: "Jan 10, 2014"
                    }
                ],
                sheet: false,
                tiles: [
                    {img: "keep.png", title: "Keep"},
                    {img: "inbox.png", title: "Inbox"},
                    {img: "hangouts.png", title: "Hangouts"},
                    {img: "messenger.png", title: "Messenger"},
                    {img: "google.png", title: "Google+"}
                ],
                loader: null,
                loading: false,
                loading2: false,
                loading3: false,
                loading4: false,
                dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
                dropdown_icon: [
                    {text: "list", callback: () => console.log("list")},
                    {text: "favorite", callback: () => console.log("favorite")},
                    {text: "delete", callback: () => console.log("delete")}
                ],
                dropdown_edit: [
                    {text: "100%"},
                    {text: "75%"},
                    {text: "50%"},
                    {text: "25%"},
                    {text: "0%"}
                ]
            };
        },

        beforeDestroy() {
            clearInterval(this.interval);
        },

        mounted() {
            this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0);
                }
                this.value += 10;
            }, 1000);
        },

        watch: {
            loader() {
                const l = this.loader;
                this[l] = !this[l];

                setTimeout(() => (this[l] = false), 3000);

                this.loader = null;
            }
        },

        computed: {},

        methods: {}
    };
</script>

<style scoped>
    #div-progress {
        text-align: center;
    }

    .progress-circular {
        margin: 1rem;
    }

    .icon {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-font-feature-settings: "liga";
        font-feature-settings: "liga";
        font-size: 24px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: 1;
        -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        vertical-align: middle;
    }

    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>