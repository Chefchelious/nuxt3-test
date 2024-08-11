<template>
  <header>
    <Container class="row justify-between items-center">
      <div class="left-col row items-center">
        <h1 class="logo q-mr-lg">Annoncé</h1>
        <div>
          <q-btn
            unelevated
            :ripple="false"
            class="category-btn q-py-sm"
            no-caps
          >
            <q-icon :name="`img:${CategoryIcon}`" class="q-mr-sm" />
            Все категории
            <q-menu anchor="bottom start" self="top left">
              <q-list style="min-width: 100px">
                <q-item v-close-popup dense clickable>
                  <q-item-section>list here</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div class="right-col row items-center">
        <p class="geo-position">
          <q-icon :name="`img:${MapMarker}`" />
          Ростов-на-Дону
        </p>
        <q-separator
          class="q-mx-md"
          size="1px"
          color="grey-13"
          vertical
          inset
        />
        <q-btn
          unelevated
          :ripple="false"
          no-caps
          label="Разместить объявления"
          class="publish-ad q-mr-lg q-pa-none"
        />
        <div>
          <q-btn
            unelevated
            :ripple="false"
            class="category-btn"
            style="padding: 4px 4px 4px 12px"
            no-caps
          >
            <q-icon :name="`img:${Burger}`" class="q-mr-sm" size="18px" />
            <q-icon
              :name="`img:${ProfileImage}`"
              class="profile-icon"
              size="40px"
            />

            <q-menu anchor="bottom end" self="top right">
              <q-list style="min-width: 100px">
                <q-item v-close-popup dense clickable>
                  <q-item-section>user menu</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </Container>
  </header>
</template>

<script lang="ts" setup>
import CategoryIcon from '~/assets/images/categories.svg';
import MapMarker from '~/assets/images/marker.svg';
import Burger from '~/assets/images/burger.svg';
import ProfileImage from '~/assets/images/profile-image.jpg';
</script>

<style scoped lang="scss">
header {
  background-color: #fff7eb;
  padding: 8px 0;
}
.logo {
  font-family: $typography-font-family-secondary;
  line-height: 28px;
  font-size: 28px;
  font-weight: 600;
}

:deep(.q-btn .q-focus-helper) {
  display: none;
}

.category-btn {
  background-color: #e8e8e8;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 500;
}

.publish-ad {
  color: $positive-dark;
}

.profile-icon {
  border-radius: 50%;
  overflow: hidden;
}
</style>
