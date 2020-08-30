<template>
  <div>
    <s-header :mTitle="'account'"></s-header>

    <div class="invoice-wrap">
      <div class="table-container">
        <el-table
          ref="productAttrCateTable"
          style="width: 100%"
          :row-style="{height: '50px'}"
          :header-cell-style="{background:'#4E505F',color:'#fff'}"
          :data="invoceList"
          border
        >
          <el-table-column label="INVOICE NUMBER" class="table-desc" width="200" align="center">
            <template slot-scope="scope">1</template>
          </el-table-column>
          <el-table-column label="TOTAL" width="200" align="center">
            <template slot-scope="scope">tianya</template>
          </el-table-column>
          <el-table-column label="DUE DATE" width="200" align="center">
            <template slot-scope="scope">30</template>
          </el-table-column>
          <el-table-column label="STATUS" width="200" align="center">
            <template slot-scope="scope">tiandao</template>
          </el-table-column>
          <el-table-column label="STATUS" width="200" align="center">
            <template slot-scope="scope">tiandao</template>
          </el-table-column>
        </el-table>

        <div class="pagination-container">
          <el-pagination
            class="pageView"
            v-if="paginationShow"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNo"
            :page-size="6"
            layout="total, prev, pager, next"
            :pager-count="12"
            :total="totalCount"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from "components/common/s-header";

export default {
  data() {
    return {
      invoceList: [1, 2, 3, 4, 5, 6, 8],
      invoActive: false,
      totalCount: 80,
      pageNo: 3,
      paginationShow: true,
      listLoading: true,
      listQuery: {
        pageNum: 1,
        pageSize: 5
      }
    };
  },
  methods: {
    getList() {},
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    }
  },
  components: {
    sHeader
  }
};
</script>

<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";

.invoice-wrap {
  position: relative;
  top: 128px;
  left: 0;
  width: 1000px;
  margin: 0 auto;
  background: #e7eff4;

  .table-container {
    background: #ffffff;
    .el-table-column {
      background: red;
    }
    .el-table-border,
    .el-table-group {
      border-color: red;
    }
    .el-table-border td,
    .el-table-border th {
      border-right: 3px solid red;
    }
    // table边框颜色
    .el-table--border:after,
    .el-table--group:after,
    .el-table:before {
      background-color: #c0c4cc;
    }

    .el-table--border,
    .el-table--group {
      border-color: #c0c4cc;
    }

    .el-table td,
    .el-table th.is-leaf {
      border-bottom: 1px solid #c0c4cc;
    }

    .el-table--border th,
    .el-table--border th.gutter:last-of-type {
      border-bottom: 1px solid #c0c4cc;
    }

    .el-table--border td,
    .el-table--border th {
      border-right: 23px solid #c0c4cc;
    }

    .el-table--border::after,
    .el-table--group::after {
      background-color: #000; //假設你的背景色是白色的話，就可以達到隱藏效果
    }
  }

  .pagination-container {
    display: flex;
    float: right;
    margin-top: 20px;
    .pageView {
      .el-pagination {
        .is-background {
          font-size: 50px;
        }
      }
    }
  }

  .foot-wrap {
    margin-top: 80px;
    width: 100%;
    padding: 0 30px;
    margin-left: -30px;
    margin-right: -30px;
    height: 80px;
    background: #4e505f;
    text-align: center;
    color: #fff;
    font-size: 22px;
    line-height: 80px;
  }
}
</style>