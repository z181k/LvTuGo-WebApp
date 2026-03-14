
Option Explicit On
Imports System.Windows.Forms
Imports Microsoft.Web.WebView2.Core

Public Class EWV2webpage
    ' 使用 Async 关键字修饰事件处理程序
    Private Async Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Try
            ' 获取存放固定版本运行时的完整路径
            Dim runtimePath As String = System.IO.Path.Combine(Application.StartupPath, "WebView2Runtime")

            ' 检查运行时文件夹是否存在
            If Not System.IO.Directory.Exists(runtimePath) Then
                MessageBox.Show("WebView2运行时文件夹不存在: " & runtimePath)
                End
            End If

            ' 使用固定版本运行时创建 WebView2 环境
            ' 注意：参数必须用括号括起来
            Dim environment As CoreWebView2Environment =
                Await CoreWebView2Environment.CreateAsync(browserExecutableFolder:=runtimePath)

            ' 使用创建好的环境初始化 WebView2 控件
            ' 控件名称是 WebView21
            Await WebView21.EnsureCoreWebView2Async(environment)

            ' 初始化成功后导航到网页
            WebView21.Source = New Uri("http://www.xn--go-5h8cl47c.top")

        Catch ex As Exception
            MessageBox.Show("WebView2 初始化失败: " & ex.Message)
            End
        End Try

        '
        Dim ScreenHeight As Integer = Screen.PrimaryScreen.Bounds.Height
        Dim ScreenWidth As Integer = Screen.PrimaryScreen.Bounds.Width
        If ScreenWidth > 2500 And ScreenHeight > 1400 Then
            Me.Size = New Size(2000, 1200)
        ElseIf ScreenWidth > 2000 And ScreenHeight > 1000 Then
            Me.Size = New Size(1400, 850)
        ElseIf ScreenWidth > 1400 And ScreenHeight > 1000 Then
            Me.Size = New Size(900, 700)
        ElseIf ScreenWidth > 1000 And ScreenHeight > 700 Then
            Me.Size = New Size(750, 500)
        ElseIf ScreenWidth > 799 And ScreenHeight > 599 Then
            Me.Size = New Size(600, 400)
        End If
    End Sub

    Private Sub HelpEWV2_sizechange(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.SizeChanged
        Dim scalePercentage As Integer
        Using g As Graphics = Me.CreateGraphics
            scalePercentage = CInt(Math.Round((g.DpiX / 96.0F) * 100))
        End Using

        ' 根据缩放比例设置宽度
        If scalePercentage <= 100 Then
            WebView21.Width = Me.Width - 15
            WebView21.Height = Me.Height - 37
        ElseIf scalePercentage <= 150 Then
            WebView21.Width = Me.Width - 20
            WebView21.Height = Me.Height - 54
        ElseIf scalePercentage <= 175 Then
            WebView21.Width = Me.Width - 24
            WebView21.Height = Me.Height - 64
        ElseIf scalePercentage <= 225 Then
            WebView21.Width = Me.Width - 28
            WebView21.Height = Me.Height - 80
        ElseIf scalePercentage <= 250 Then
            WebView21.Width = Me.Width - 34
            WebView21.Height = Me.Height - 90
        ElseIf scalePercentage <= 300 Then
            WebView21.Width = Me.Width - 43
            WebView21.Height = Me.Height - 108
        ElseIf scalePercentage <= 375 Then
            WebView21.Width = Me.Width - 53
            WebView21.Height = Me.Height - 136
        ElseIf scalePercentage <= 450 Then
            WebView21.Width = Me.Width - 64
            WebView21.Height = Me.Height - 164
        ElseIf scalePercentage <= 525 Then
            WebView21.Width = Me.Width - 75
            WebView21.Height = Me.Height - 192
        End If
    End Sub

End Class
