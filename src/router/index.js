import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import detailRouter from './detail'

Vue.use(VueRouter)

const routes = [
  movieRouter,
  mineRouter,
  cinemaRouter,
  detailRouter,
  {
    path: '/*',
    redirect: './movie/nowPlaying'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
