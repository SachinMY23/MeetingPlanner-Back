define({ "api": [
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/all/:userId",
    "title": "api to get all the meetings of a single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>userID of the user. (url params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip the output of api (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"meetingTime\": \"2020-03-02 00:02\",\n            \"meetingPurpose\": \"formal\",\n            \"createdOn\": \"2020-03-02T13:47:58.944Z\",\n            \"adminName\": \"Nirmala Mallikarjun\",\n            \"meetingId\": \"bAoeMnmv\",\n            \"userId\": \"c4re3YUy\",\n            \"adminNo\":969699848848\n        },\n        {\n            \"meetingTime\": \"Monday, March 2, 2020 12:02 AM\",\n            \"meetingPurpose\": \"formal\",\n            \"createdOn\": \"2020-03-02T12:21:39.149Z\",\n            \"adminName\": \"Nirmala Mallikarjun\",\n            \"meetingId\": \"fQevXmU9\",\n            \"userId\": \"c4re3YUy\",\n            \"adminNo\":969699848848\n        },\n        {\n            \"meetingTime\": \"Monday, March 2, 2020 12:02 AM\",\n            \"meetingPurpose\": \"\",\n            \"createdOn\": \"2020-03-02T12:20:16.965Z\",\n            \"adminName\": \"Nirmala Mallikarjun\",\n            \"meetingId\": \"k70k813_\",\n            \"userId\": \"c4re3YUy\",\n            \"adminNo\":969699848848\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meetings",
    "name": "GetApiV1MeetingsAllUserid"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/create/:userId",
    "title": "api to create a meeting for the single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingVenue",
            "description": "<p>meeting place. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingTime",
            "description": "<p>meeting time. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingPurpose",
            "description": "<p>purpose of the meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminName",
            "description": "<p>name of the admin. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminNo",
            "description": "<p>phone number of the admin. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fullName",
            "description": "<p>full name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"meeting Created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"meetingTime\": \"Monday, March 2, 2020 12:02 AM\",\n        \"meetingPurpose\": \"formal\",\n        \"createdOn\": \"2020-03-02T13:47:58.944Z\",\n        \"adminName\": \"Nirmala Mallikarjun\",\n        \"meetingId\": \"bAoeMnmv\",\n        \"userId\": \"c4re3YUy\"\n        \n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meetings",
    "name": "PostApiV1MeetingsCreateUserid"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/delete/:meetingId",
    "title": "api to delete a single meeting of the user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the meeting. (url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Meeting Deleted Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"meetingTime\": \"Monday, March 2, 2020 12:02 AM\",\n        \"meetingPurpose\": \"formal\",\n        \"createdOn\": \"2020-03-02T12:21:39.149Z\",\n        \"adminName\": \"Nirmala Mallikarjun\",\n        \"_id\": \"5e5cfa536cc1d71c98712032\",\n        \"meetingId\": \"fQevXmU9\",\n        \"userId\": \"c4re3YUy\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meetings",
    "name": "PostApiV1MeetingsDeleteMeetingid"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/edit/:userId",
    "title": "api to edit a meeting for the single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingVenue",
            "description": "<p>firstName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingTime",
            "description": "<p>lastName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingPurpose",
            "description": "<p>email of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminName",
            "description": "<p>name of the admin . (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminNo",
            "description": "<p>phone number of the admin . (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Meeting Edited Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meetings",
    "name": "PostApiV1MeetingsEditUserid"
  },
  {
    "group": "meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/single/:meetingId",
    "title": "api to get a meeting of a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the meeting. (url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"meetingTime\": \"2020-03-02 00:02\",\n            \"meetingPurpose\": \"\",\n            \"createdOn\": \"2020-03-02T13:47:58.944Z\",\n            \"adminName\": \"Nirmala Mallikarjun\",\n            \"meetingId\": \"bAoeMnmv\",\n            \"userId\": \"c4re3YUy\",\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "meetings",
    "name": "PostApiV1MeetingsSingleMeetingid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/all/users",
    "title": "api to get all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"uX-0U1xg\",\n            \"firstName\": \"XYZ\",\n            \"lastName\": \"abc\",\n            \"countryCode\": 91,\n            \"mobileNumber\": null,\n            \"email\": \"xyz@gmail.com\",\n            \"isAdmin\": true,\n            \"createdOn\": \"2020-03-02T11:42:57.000Z\"\n        },\n        {\n            \"userId\": \"V4eTMj6o\",\n            \"firstName\": \"Nirmala\",\n            \"lastName\": \"Mallikarjun\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 9686464589,\n            \"email\": \"nmy@gmail.com\",\n            \"isAdmin\": true,\n            \"createdOn\": \"2020-03-02T11:44:07.000Z\"\n        },\n        {\n            \"userId\": \"c4re3YUy\",\n            \"firstName\": \"Sachin\",\n            \"lastName\": \"M Yattinahalli\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 9686464589,\n            \"email\": \"sachinmy612@gmail.com\",\n            \"isAdmin\": false,\n            \"createdOn\": \"2020-03-02T11:46:53.000Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersAllUsers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/single/user/:userId",
    "title": "api to get a single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n\"error\": false,\n\"message\": \"User details found Successfully\",\n\"status\": 200,\n\"data\": [\n    {\n        \"userId\": \"c4re3YUy\",\n        \"firstName\": \"Sachin\",\n        \"lastName\": \"M Yattinahalli\",\n        \"countryCode\": 91,\n        \"mobileNumber\": 9686464589,\n        \"email\": \"sachinmy612@gmail.com\",\n        \"isAdmin\": false,\n        \"password\": \"$2a$10$uVpIQnQMtk7BVBBS4nvlkuj3zp2FMyi2seeX3oJIm8yDYDR7bhJea\",\n        \"createdOn\": \"2020-03-02T11:46:53.000Z\"\n    }\n]\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersSingleUserUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/delete/single/:userId",
    "title": "api to delete a single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "          {\n    \"error\": false,\n    \"message\": \"User Deleted Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1DeleteSingleUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/edit/profile/:userId",
    "title": "api to edit the profile information of a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobile number of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"User profile Edited Successfully.\",\n \"status\": 200,\n \"data\": {\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 1\n          }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1EditProfileUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/delete/all",
    "title": "api to delete all the users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"Users Deleted Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersDeleteAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1//users/login",
    "title": "api to login a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"Login Successful\",\n \"status\": 200,\n \"data\": {\n          \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjJzeTRfWVdvIiwiaWF0IjoxNTgzMTUwMjgyMjYxLCJleHAiOjE1ODMyMzY2ODIsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6InRvRG9MaXN0IiwiZGF0YSI6eyJ1c2VySWQiOiJWNGVUTWo2byIsImZpcnN0TmFtZSI6Ik5pcm1hbGEiLCJsYXN0TmFtZSI6Ik1hbGxpa2FyanVuIiwiY291bnRyeUNvZGUiOjkxLCJtb2JpbGVOdW1iZXIiOjk2ODY0NjQ1ODksImVtYWlsIjoibm15QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWV9fQ.SpjDgpEfOe2hUlQzZ9WDVEhqubQpN8uIhADWWF_qlLQ\",\n          \"userDetails\": {\n          \"userId\": \"V4eTMj6o\",\n          \"firstName\": \"Nirmala\",\n          \"lastName\": \"Mallikarjun\",\n          \"countryCode\": 91,\n          \"mobileNumber\": 9686464589,\n          \"email\": \"nmy@gmail.com\",\n          \"isAdmin\": true\n           }\n          }\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api to logout a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Logged Out Successfully\",\n   \"status\": 200,\n  \"data\": null\n }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/recover/password",
    "title": "api to recover password of a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "            {\n    \"error\": false,\n    \"message\": \"Password sent to mail successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersRecoverPassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api to signup a user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobile number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminKey",
            "description": "<p>key to signup as a admin. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User created\",\n\"status\": 200,\n\"data\": {\n         \"userId\": \"V4eTMj6o\",\n         \"firstName\": \"Nirmala\",\n         \"lastName\": \"Mallikarjun\",\n         \"countryCode\": 91,\n         \"mobileNumber\": 9686464589,\n         \"email\": \"nmy@gmail.com\",\n         \"isAdmin\": true,\n         \"createdOn\": \"2020-03-02T11:44:07.000Z\"\n         }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api to signup a user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"error\": false,\n    \"message\": \"User Deleted Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
