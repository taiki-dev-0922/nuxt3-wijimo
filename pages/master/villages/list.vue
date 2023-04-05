<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card border flat>
          <v-card-title>操作種別</v-card-title>
          <v-card-text>
            <form>
              <div class="wj-labeled-input">
                <input id="registEdit" type="radio" name="actionType" checked />
                <label for="registEdit">登録・編集する</label>
              </div>
              <div class="wj-labeled-input">
                <input id="delete" type="radio" name="actionType" />
                <label for="delete">削除する</label>
              </div>
              <div class="wj-labeled-input">
                <input id="reference" type="radio" name="actionType" />
                <label for="reference">参照する</label>
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>検索項目</v-card-title>
          <v-card-text>
            <v-container>
              <form>
                <v-row>
                  <v-col cols="1">
                    <div class="wj-labeled-input">
                      <wj-combo-box />
                      <label>村ID</label>
                    </div>
                  </v-col>
                  <v-col cols="1">
                    <div class="wj-labeled-input">
                      <wj-combo-box />
                      <label>村名(英文)</label>
                    </div>
                  </v-col>
                  <v-col cols="1">
                    <div class="wj-labeled-input">
                      <wj-combo-box />
                      <label>村名(英文)</label>
                    </div>
                  </v-col>
                  <v-spacer />
                  <v-btn color="primary">検索する</v-btn>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <wj-flex-grid :items-source="itemsSource">
          <wj-flex-grid-column header="村ID" binding="idm" />
          <wj-flex-grid-column header="村名(和文)" binding="name" />
          <wj-flex-grid-column header="村ID(英文)" binding="name_en" />
        </wj-flex-grid>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const itemsSource = [
  { id: 1, idm: "001", name: "村名1", name_en: "village1" },
  { id: 1, idm: "002", name: "村名2", name_en: "village2" },
  { id: 1, idm: "003", name: "村名3", name_en: "village3" },
];
</script>
