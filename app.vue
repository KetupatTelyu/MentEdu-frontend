<template>
  <div>
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>
<script setup>
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'

const db = useFirestore()
const user = useCurrentUser()

const {
  public: { vuefireVersion, nuxtVuefireVersion },
} = useRuntimeConfig()

const router = useRouter()
const route = useRoute()
watch(user, async (currentUser, previousUser) => {
  // redirect to login if they logout and the current route is only for authenticated users
  if (
      !currentUser &&
      previousUser &&
      (Array.isArray(route.meta.middleware)
          ? route.meta.middleware.includes('authenticated')
          : route.meta.middleware === 'authenticated')
  ) {
    return router.push({ name: 'login' })
  }
  // redirect the user if they are logged in but were rejected because the user wasn't ready yet
  if (currentUser && typeof route.query.redirect === 'string') {
    return router.push(route.query.redirect)
  }

  // update user info
  if (currentUser && !currentUser.isAnonymous) {
    console.log('Updating user info...')
    const userDoc = doc(db, 'users', currentUser.uid)
    const userData = {
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      lastLogin: serverTimestamp(),
    }
    const existingUser = await getDoc(userDoc)

    if (existingUser.exists()) {
      await updateDoc(userDoc, userData)
    } else {
      await setDoc(userDoc, {
        ...userData,
        joinedAt: serverTimestamp(),
      })
    }
    console.log('User updated')
  }
})
</script>
