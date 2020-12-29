<template>
  <div class="news">
    <div class="news__add-btn-container">
      <button
        class="news__add-btn"
        @click="showSetDescriptionModal()"
      >
        Add news
      </button>
    </div>
    <div class="news__list">
      <div
        v-for="(newItem, itemKey) in news"
        :key="itemKey"
        class="news__list-item"
      >
        <div class="news__list-item-header">
          <div class="news__list-item-title">
            {{ newItem.title }}
          </div>
          <div class="news__list-item-date">
            {{ dateFormat(newItem.createdDate, "D MMM YYYY") }}
          </div>
        </div>
        <div class="news__list-item-content">
          <div
            v-if="!isEditModeEnabled(itemKey)"
            class="news__list-item-description"
          >
            {{ newItem.description }}
          </div>
          <div
            v-if="isEditModeEnabled(itemKey)"
            class="news__list-item-description"
          >
            <input
              v-model="editableItem.description"
              type="text"
            >
          </div>
          <div
            class="news__list-item-btn-container"
          >
            <ButtonCircle
              :icon="'pen-edit'"
              @click="toggleEditMode(itemKey, newItem)"
            />
          </div>
        </div>
        <div class="news__list-item-footer">
          <div class="news__list-item-footer-title">
            Comments:
          </div>
          <div class="news__list-item-comments">
            <div
              v-for="(commentItem, commentKey) in filterComments(newItem.id)"
              :key="commentKey"
              class="news__list-item-comment"
            >
              <div class="news__list-item-comment-header">
                <div class="news__list-item-comment-user-name">
                  {{ commentItem.userName }}
                </div>
                <div class="news__list-item-comment-date">
                  {{ dateFormat(commentItem.createdDate, "D MMM YYYY") }}
                </div>
                <div
                  v-if="isOwner(commentItem.userId)"
                  class="news__list-item-comment-remove"
                  @click="deleteComment(commentItem.id)"
                >
                  <div class="news__list-item-comment-remove-icon">
                    <SVGIcon
                      :name="'remove_v2'"
                      :colors="'0deg, #fff, #fff'"
                    />
                  </div>
                  Remove
                </div>
              </div>
              <div class="news__list-item-comment-description">
                {{ commentItem.text }}
              </div>
            </div>
          </div>
          <AddComments
            :post-id="newItem.id"
          />
        </div>
      </div>
    </div>
    <AddNewsForm />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ButtonCircle from '../../baseComponents/ButtonCircle.vue';
import AddNewsForm from '../modals/AddNewsForm.vue';
import AddComments from './AddComments.vue';
import editMode from '../../modules/mixins/editMode';
import SVGIcon from '../../baseComponents/SVGIcon.vue';

export default {
  name: 'News',
  components: {
    AddNewsForm,
    ButtonCircle,
    AddComments,
    SVGIcon,
  },
  mixins: [
    editMode,
  ],
  data() {
    return {
      newForm: {
        description: '',
      },
      editableItem: {},
      comment: '',
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.user_id,
      news: (state) => state.news.news,
      comments: (state) => state.comments.comments,
    }),
    ...mapGetters(['isOwner']),
  },
  mounted() {
    this.$store.dispatch('get_news');
    this.$store.dispatch('get_comment');
    // this.base_info = this.$lodash.cloneDeep(this.news);
  },
  methods: {
    showSetDescriptionModal() {
      this.$modal.show('add-news-form');
    },
    addEditableItem(item) {
      this.editableItem = this.$lodash.cloneDeep(item);
    },
    saveEditableItem() {
      this.$store.dispatch('edit_new', this.editableItem);
    },
    deleteComment(id) {
      this.$store.dispatch('remove_comment', id);
    },
    filterComments(id) {
      return this.$lodash.filter(this.comments, (comment) => (comment.postId === id));
    },
    dateFormat(date, format) {
      return this.$moment(date).format(format);
    },
  },
};
</script>

<style scoped lang="scss">
.news {
  @include basic-flex(column, flex-start, center);
  padding: 50px 15px 20px 15px;
  height: 100%;
  .news__add-btn-container {
    margin-bottom: 30px;
    .news__add-btn {
      min-width: 310px;
      background-color: #ef5466;
      border: none;
      border-radius: 35px;
      padding: 14px 30px;
      text-align: center;
    }
  }
  .news__list {
    @include basic-flex(column, center, center);
    max-width: 1140px;
    width: 100%;
    input {
      @include site-font(default, 16px, normal);
      line-height: 18px;
      color: #ffffff;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
      outline: 0;
      border: none;
      background: transparent;
    }
    .news__list-item {
      @include basic-flex(column, center, center);
      background-color: #32323d;
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 30px;
      border-radius: 15px;
      padding: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
      .news__list-item-header {
        @include basic-flex(row, flex-start, center);
        margin-bottom: 15px;
        width: 100%;
        .news__list-item-title {
          @include site-font(default, 18px, normal);
          line-height: 23px;
          color: #ffffff;
          margin-right: 30px;
        }
        .news__list-item-date {
          @include site-font(default, 15px, normal);
          line-height: 19px;
          color: #ccc;
        }
      }
      .news__list-item-content {
        @include basic-flex(row, flex-start, center);
        margin-bottom: 20px;
        width: 100%;
        .news__list-item-description {
          @include site-font(default, 16px, normal);
          line-height: 18px;
          color: #ffffff;
          margin-right: 20px;
          width: 100%;
          cursor: default;
          input {
            @include site-font(default, 16px, normal);
            line-height: 18px;
            color: #ffffff;
            width: 100%;
            margin-bottom: 15px;
            padding: 10px;
            outline: 0;
            border: none;
            background: transparent;
          }
        }
        .news__list-item-btn-container {
          @include basic-flex(row, center, center);
        }
      }
      .news__list-item-footer {
        border-top: 1px solid rgba(#6d6d98, .3);
        padding-top: 10px;
        width: 100%;
        .news__list-item-footer-title {
          @include site-font(default, 16px, normal);
          line-height: 18px;
          color: #ffffff;
          margin-bottom: 10px;
        }
        .news__list-item-comments {
          .news__list-item-comment {
            @include basic-flex(column, center, flex-start);
            border-bottom: 1px solid rgba(#6d6d98, .3);
            padding-bottom: 10px;
            margin-bottom: 15px;
            cursor: default;
            &:last-child {
              border-bottom: none;
            }
            .news__list-item-comment-header {
              @include basic-flex(row, flex-start, center);
              position: relative;
              margin-bottom: 5px;
              width: 100%;
              .news__list-item-comment-user-name {
                @include site-font(default, 16px, normal);
                line-height: 18px;
                color: #ffffff;
                margin-right: 20px;
              }
              .news__list-item-comment-date {
                @include site-font(default, 16px, normal);
                line-height: 18px;
                color: #ffffff;
              }
              .news__list-item-comment-remove {
                @include basic-flex(row, flex-start, center);
                @include position(absolute, 5px, 0);
                @include site-font(default, 13px, normal);
                line-height: 15px;
                color: #ffffff;
                cursor: pointer;
                .news__list-item-comment-remove-icon {
                  margin-right: 5px;
                  height: 10px;
                  width: 10px;
                }
              }
            }
            .news__list-item-comment-description {
              @include site-font(default, 16px, normal);
              line-height: 18px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
