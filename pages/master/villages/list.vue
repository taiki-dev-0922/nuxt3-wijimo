<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>操作種別</v-card-title>
          <v-card-text>
            <form
              id="theForm"
              class="wj-dialog"
              @submit="submit"
              @reset="reset"
            >
              <div class="wj-labeled-input">
                <input id="btnRed" type="radio" name="color" checked />
                <label for="btnRed">登録・編集する</label>
              </div>
              <div class="wj-labeled-input">
                <input id="btnGreen" type="radio" name="color" />
                <label for="btnGreen">削除する</label>
              </div>
              <div class="wj-labeled-input">
                <input id="btnBlue" type="radio" name="color" />
                <label for="btnBlue">参照する</label>
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
              <form
                id="theForm"
                class="wj-dialog"
                @submit="submit"
                @reset="reset"
              >
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
  </v-container>
</template>
