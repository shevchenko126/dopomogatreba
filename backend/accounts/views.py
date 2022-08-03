from django.shortcuts import render

# Create your views here.
<<<<<<< Updated upstream
=======
class CustomAuthData(ObtainAuthToken):
    queryset = User.objects.all()
    # def post(self,request, *args, **kwargs):
    #     user_data = {
    #         "username": request.data['username'.lower],
    #         "password": request.data['password']
    #     }
        
    #     try:
    #         user = authenticate(**user_data)
    #         resp = {
    #             "success":True,
    #             "token": Token.objects.filter(user=user).first().key,
    #             "user_id": user.id,
    #             "user_email": user.email,
    #         }
    #     except:
    #         resp = {
    #             "success":False,
    #             "token": "",
    #             "user_id": 0,
    #             "user_email": "",
    #         }
    #     return Response(resp)
    def post(self, request, *args, **kwargs):
            serializer = self.serializer_class(data=request.data,
                                       context={'request': request})
            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
        })
    
    
    def get(self,request, *args, **kwargs):
        token = request.data.get('Authorization')
        user = Token.objects.get(key=token).user 
        try:
               
            user_id = user.pk
            user_email = user.email
            print(str(token))
        except Token.DoesNotExist:
            user_id = 0
            user_email = ""
            print(str(token))
            return Response({
                "token": token,
                "user_id": 0,
                "user_email": "",
            })
        return Response({
            "token": token,
            "user_id": user.pk,
            "user_email": user.email,
        })
>>>>>>> Stashed changes
